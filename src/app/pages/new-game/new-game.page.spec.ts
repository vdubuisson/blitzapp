import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { NewGameService } from '@/services/new-game/new-game.service';
import { waitForAsync } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { NewPlayerComponent } from '@/components/new-player/new-player.component';
import { CardList } from '@/models/card-list.model';
import { CardChoiceService } from '@/services/card-choice/card-choice.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, output, signal, WritableSignal } from '@angular/core';
import { NewGamePage } from './new-game.page';

@Component({
  selector: 'lgmj-new-player',
  standalone: true,
  template: '',
})
class NewPlayerStubComponent {
  readonly newPlayer = output<string>();
}

describe('NewGamePage', () => {
  let component: NewGamePage;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockCardList: WritableSignal<CardList>;

  ngMocks.faster();

  beforeAll(async () =>
    MockBuilder(NewGamePage)
      .mock(NewGameService)
      .mock(CardChoiceService)
      .replace(NewPlayerComponent, NewPlayerStubComponent),
  );

  beforeAll(() => {
    mockPlayers$ = signal([]);
    mockCardList = signal({ playersNumber: 0 } as CardList);

    MockInstance(NewGameService, () => ({
      currentPlayers: mockPlayers$.asReadonly(),
      addPlayer: jest.fn(),
      removePlayer: jest.fn(),
      reorderPlayers: jest.fn(),
    }));

    MockInstance(CardChoiceService, () => ({
      currentChosenCards: mockCardList.asReadonly(),
    }));
  });

  beforeAll(() => {
    component = MockRender(NewGamePage).point.componentInstance;
  });

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
    const newGameService = ngMocks.get(NewGameService);

    component['addPlayer']('player0');

    expect(newGameService.addPlayer).toHaveBeenCalledWith('player0');
  });

  it('should remove player', () => {
    const newGameService = ngMocks.get(NewGameService);

    component['removePlayer'](0);

    expect(newGameService.removePlayer).toHaveBeenCalledWith(0);
  });

  it('should reorder player', () => {
    const newGameService = ngMocks.get(NewGameService);

    const mockEvent = { previousIndex: 0, currentIndex: 2 } as CdkDragDrop<
      Player[]
    >;

    component['reorderPlayer'](mockEvent);

    expect(newGameService.reorderPlayers).toHaveBeenCalledWith(0, 2);
  });

  afterAll(MockReset);
});
