import { waitForAsync } from '@angular/core/testing';
import { GameService } from '../services/game/game.service';
import { MockService } from 'ng-mocks';

import { GamePage } from './game.page';
import { PlayerRoleEnum } from '../enums/player-role.enum';
import { Player } from '../models/player.model';
import { BehaviorSubject } from 'rxjs';
import { Round } from '../models/round.model';
import { RoundEnum } from '../enums/round.enum';
import { RadioGroupCustomEvent } from '@ionic/angular';

describe('GamePage', () => {
  let component: GamePage;
  let gameService: GameService;

  let mockPlayers$: BehaviorSubject<Player[]>;
  let mockRound$: BehaviorSubject<Round>;

  beforeEach(waitForAsync(() => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$ = new BehaviorSubject(mockPlayers);
    const mockRound: Round = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
    };
    mockRound$ = new BehaviorSubject(mockRound);
    gameService = MockService(GameService);
    jest.spyOn(gameService, 'getPlayers').mockReturnValue(mockPlayers$);
    jest.spyOn(gameService, 'getRound').mockReturnValue(mockRound$);
    component = new GamePage(gameService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players from GameService', () => {
    expect(component['players$']).toEqual(mockPlayers$);
  });

  it('should get round from GameService', () => {
    expect(component['round$']).toEqual(mockRound$);
  });

  it('should single select player', () => {
    component['onSinglePlayerChecked']({
      detail: { value: 0 },
    } as RadioGroupCustomEvent);

    expect(component.selectedPlayer).toEqual(0);
  });

  it('should submit selectedPlayer to GameService on submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component.selectedPlayer = 0;

    component['onSubmit']();

    expect(gameService.submitRoundAction).toBeCalledWith([0]);
  });

  it('should submit empty array to GameService on submit without any player selected', () => {
    jest.spyOn(gameService, 'submitRoundAction');

    component['onSubmit']();

    expect(gameService.submitRoundAction).toBeCalledWith([]);
  });

  it('should reset selectedPlayer after submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component.selectedPlayer = 0;

    component['onSubmit']();

    expect(component.selectedPlayer).toEqual(undefined);
  });
});
