import { waitForAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { NewGameService } from '../../core/services/new-game/new-game.service';

import { NewGamePage } from './new-game.page';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';
import { CardList } from '../../core/models/card-list.model';
import { signal, WritableSignal } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

describe('NewGamePage', () => {
  let component: NewGamePage;
  let newGameService: NewGameService;
  let cardChoiceService: CardChoiceService;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockCardList: WritableSignal<CardList | undefined>;

  beforeEach(waitForAsync(() => {
    mockPlayers$ = signal([]);
    mockCardList = signal({ playersNumber: 0 } as CardList);
    newGameService = {
      ...MockService(NewGameService),
      currentPlayers: mockPlayers$.asReadonly(),
    } as NewGameService;
    cardChoiceService = {
      ...MockService(CardChoiceService),
      currentChosenCards: mockCardList.asReadonly(),
    } as CardChoiceService;

    component = new NewGamePage(newGameService, cardChoiceService);
  }));

  it('should get players from NewGameService', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['players']()).toEqual(mockPlayers);
  }));

  it('should get playersNumber from CardChoiceService', waitForAsync(() => {
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(component['playersCount']()).toEqual(3);
  }));

  it('should not be able to validate if less than playersCount', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(component['canValidate']()).toEqual(false);
  }));

  it('should be able to validate if equals playersCount', waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(component['canValidate']()).toEqual(true);
  }));

  it('should add player', () => {
    jest.spyOn(newGameService, 'addPlayer');

    component['addPlayer']('player0');

    expect(newGameService.addPlayer).toHaveBeenCalledWith('player0');
  });

  it('should remove player', () => {
    jest.spyOn(newGameService, 'removePlayer');

    component['removePlayer'](0);

    expect(newGameService.removePlayer).toHaveBeenCalledWith(0);
  });

  it('should reorder player', () => {
    jest.spyOn(newGameService, 'reorderPlayers');
    const mockEvent = { previousIndex: 0, currentIndex: 2 } as CdkDragDrop<
      Player[]
    >;

    component['reorderPlayer'](mockEvent);

    expect(newGameService.reorderPlayers).toHaveBeenCalledWith(0, 2);
  });
});
