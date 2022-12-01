import { waitForAsync } from '@angular/core/testing';
import { GameService } from '../core/services/game/game.service';
import { MockService } from 'ng-mocks';

import { GamePage } from './game.page';
import { PlayerRoleEnum } from '../core/enums/player-role.enum';
import { Player } from '../core/models/player.model';
import { BehaviorSubject } from 'rxjs';
import { Round } from '../core/models/round.model';
import { RoundEnum } from '../core/enums/round.enum';
import { RadioGroupCustomEvent } from '@ionic/angular';
import { PlayerDisplayModeEnum } from '../core/enums/player-display-mode.enum';

describe('GamePage', () => {
  let component: GamePage;
  let gameService: GameService;

  let mockPlayers: Player[];
  let mockRound: Round;
  let mockPlayers$: BehaviorSubject<Player[]>;
  let mockRound$: BehaviorSubject<Round>;

  beforeEach(waitForAsync(() => {
    mockPlayers = [
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
    mockRound = {
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

  it('should get players from GameService', waitForAsync(() => {
    component['players$'].subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });
  }));

  it('should get round from GameService', waitForAsync(() => {
    component['round$'].subscribe((round) => {
      expect(round).toEqual(mockRound);
    });
  }));

  it('should set playerDisplayMode as SELECT_SINGLE if only one selectable', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
    });
    component['round$'].subscribe(() => {
      expect(component['playerDisplayMode']).toEqual(
        PlayerDisplayModeEnum.SELECT_SINGLE
      );
    });
  }));

  it('should set playerDisplayMode as SELECT_MULTI if multi selectable', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
    });
    component['round$'].subscribe(() => {
      expect(component['playerDisplayMode']).toEqual(
        PlayerDisplayModeEnum.SELECT_MULTI
      );
    });
  }));

  it('should set playerDisplayMode as DEFAULT if no selectable', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
    });
    component['round$'].subscribe(() => {
      expect(component['playerDisplayMode']).toEqual(
        PlayerDisplayModeEnum.DEFAULT
      );
    });
  }));

  it('should have submit disabled if should select one and no selection', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
    });
    component['selectedPlayer'] = undefined;
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(true);
    });
  }));

  it('should have submit disabled if should select multiple and more selected than max', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
    });
    component['selectedPlayers'] = new Set([0, 1, 2]);
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(true);
    });
  }));

  it('should have submit disabled if should select multiple and less selected than min', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 2,
    });
    component['selectedPlayers'] = new Set([0]);
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(true);
    });
  }));

  it('should have submit enabled if should select one and one selected', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
    });
    component['selectedPlayer'] = 0;
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(false);
    });
  }));

  it('should have submit enabled if can select one and none selected', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
    });
    component['selectedPlayer'] = undefined;
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(false);
    });
  }));

  it('should have submit enabled if should select multiple and selected in range', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
    });
    component['selectedPlayers'] = new Set([0]);
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(false);
    });
  }));

  it('should have submit enabled if should select none', waitForAsync(() => {
    mockRound$.next({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
    });
    component['round$'].subscribe(() => {
      expect(component['submitDisabled']).toEqual(false);
    });
  }));

  it('should single select player', () => {
    component['playerDisplayMode'] = PlayerDisplayModeEnum.SELECT_SINGLE;
    component['onSinglePlayerChecked']({
      detail: { value: 0 },
    } as RadioGroupCustomEvent);

    expect(component['selectedPlayer']).toEqual(0);
  });

  it('should multi select player', () => {
    component['playerDisplayMode'] = PlayerDisplayModeEnum.SELECT_MULTI;
    component['onMultiPlayerChecked'](0, true);

    expect(component['selectedPlayers'].has(0)).toEqual(true);
  });

  it('should multi unselect player', () => {
    component['playerDisplayMode'] = PlayerDisplayModeEnum.SELECT_MULTI;
    component['selectedPlayers'] = new Set([0]);
    component['onMultiPlayerChecked'](0, false);

    expect(component['selectedPlayers'].has(0)).toEqual(false);
  });

  it('should submit selectedPlayer to GameService on submit if SELECT_SINGLE', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayer'] = 0;

    component['onSubmit']();

    expect(gameService.submitRoundAction).toBeCalledWith([0]);
  });

  it('should submit selectedPlayers to GameService on submit if SELECT_MULTI', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayers'] = new Set([0, 1]);

    component['onSubmit']();

    expect(gameService.submitRoundAction).toBeCalledWith([0, 1]);
  });

  it('should reset selectedPlayer after submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayer'] = 0;

    component['onSubmit']();

    expect(component['selectedPlayer']).toEqual(undefined);
  });

  it('should reset selectedPlayers after submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayers'] = new Set([0, 1]);

    component['onSubmit']();

    expect(component['selectedPlayers'].size).toEqual(0);
  });
});
