import { waitForAsync } from '@angular/core/testing';
import { GameService } from '../../core/services/game/game.service';
import { MockService } from 'ng-mocks';
import { GamePage } from './game.page';
import { PlayerRoleEnum } from '../../core/enums/player-role.enum';
import { Player } from '../../core/models/player.model';
import { Round } from '../../core/models/round.model';
import { RoundEnum } from '../../core/enums/round.enum';
import { RadioGroupCustomEvent } from '@ionic/angular';
import { PlayerDisplayModeEnum } from '../../core/enums/player-display-mode.enum';
import { RoundTypeEnum } from '../../core/enums/round-type.enum';
import { signal, WritableSignal } from '@angular/core';

describe('GamePage', () => {
  let component: GamePage;
  let gameService: GameService;

  let mockPlayers: Player[];
  let mockRound: Round;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockRound$: WritableSignal<Round | undefined>;

  beforeEach(waitForAsync(() => {
    mockPlayers = [
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
    mockPlayers$ = signal(mockPlayers);
    mockRound = {
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockRound$ = signal(mockRound);
    gameService = {
      ...MockService(GameService),
      currentPlayers: mockPlayers$.asReadonly(),
      currentRound: mockRound$.asReadonly(),
    } as GameService;
    component = new GamePage(gameService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players from GameService', waitForAsync(() => {
    expect(component['players']()).toEqual(mockPlayers);
  }));

  it('should get round from GameService', waitForAsync(() => {
    expect(component['round']()).toEqual(mockRound);
  }));

  it('should set playerDisplayMode as EDIT_ROLE if round type ROLES', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.EDIT_ROLE,
    );
  }));

  it('should set playerDisplayMode as SELECT_SINGLE if only one selectable', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.SELECT_SINGLE,
    );
  }));

  it('should set playerDisplayMode as SELECT_MULTI if multi selectable', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.SELECT_MULTI,
    );
  }));

  it('should set playerDisplayMode as DEFAULT if no selectable', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.DEFAULT,
    );
  }));

  it('should have submit disabled if should select one role and no selection', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['selectedRole'].set(undefined);
    expect(component['submitDisabled']()).toEqual(true);
  }));

  it('should have submit disabled if should select one and no selection', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayer'].set(undefined);
    expect(component['submitDisabled']()).toEqual(true);
  }));

  it('should have submit disabled if should select multiple and more selected than max', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayers'].set(new Set([0, 1, 2]));
    expect(component['submitDisabled']()).toEqual(true);
  }));

  it('should have submit disabled if should select multiple and less selected than min', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 2,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayers'].set(new Set([0]));
    expect(component['submitDisabled']()).toEqual(true);
  }));

  it('should have submit enabled if should select one role and one selected', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);
    expect(component['submitDisabled']()).toEqual(false);
  }));

  it('should have submit enabled if should select one and one selected', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayer'].set(0);
    expect(component['submitDisabled']()).toEqual(false);
  }));

  it('should have submit enabled if can select one and none selected', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['selectedRole'].set(undefined);
    expect(component['submitDisabled']()).toEqual(false);
  }));

  it('should have submit enabled if can select one and none selected', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayer'].set(undefined);
    expect(component['submitDisabled']()).toEqual(false);
  }));

  it('should have submit enabled if should select multiple and selected in range', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayers'].set(new Set([0]));
    expect(component['submitDisabled']()).toEqual(false);
  }));

  it('should have submit enabled if should select none', waitForAsync(() => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['submitDisabled']()).toEqual(false);
  }));

  it('should select role', () => {
    mockRound$.set({
      role: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['onRoleSelect'](PlayerRoleEnum.LOUP_GAROU);

    expect(component['selectedRole']()).toEqual(PlayerRoleEnum.LOUP_GAROU);
  });

  it('should single select player', () => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['onSinglePlayerChecked']({
      detail: { value: 0 },
    } as RadioGroupCustomEvent);

    expect(component['selectedPlayer']()).toEqual(0);
  });

  it('should multi select player', () => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['onMultiPlayerChecked'](0, true);

    expect(component['selectedPlayers']().has(0)).toEqual(true);
  });

  it('should multi unselect player', () => {
    mockRound$.set({
      role: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayers'].set(new Set([0]));
    component['onMultiPlayerChecked'](0, false);

    expect(component['selectedPlayers']().has(0)).toEqual(false);
  });

  it('should submit selectedRole to GameService on submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);

    component['onSubmit']();

    expect(gameService.submitRoundAction).toHaveBeenCalledWith(
      [],
      PlayerRoleEnum.LOUP_GAROU,
    );
  });

  it('should submit selectedPlayer to GameService on submit if SELECT_SINGLE', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayer'].set(0);

    component['onSubmit']();

    expect(gameService.submitRoundAction).toHaveBeenCalledWith([0], undefined);
  });

  it('should submit selectedPlayers to GameService on submit if SELECT_MULTI', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayers'].set(new Set([0, 1]));

    component['onSubmit']();

    expect(gameService.submitRoundAction).toHaveBeenCalledWith(
      [0, 1],
      undefined,
    );
  });

  it('should reset selectedRole after submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);

    component['onSubmit']();

    expect(component['selectedRole']()).toEqual(undefined);
  });

  it('should reset selectedPlayer after submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayer'].set(0);

    component['onSubmit']();

    expect(component['selectedPlayer']()).toEqual(undefined);
  });

  it('should reset selectedPlayers after submit', () => {
    jest.spyOn(gameService, 'submitRoundAction');
    component['selectedPlayers'].set(new Set([0, 1]));

    component['onSubmit']();

    expect(component['selectedPlayers']().size).toEqual(0);
  });

  it('should display equality button if VILLAGEOIS round and BOUC alive', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    mockRound$.set({
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(true);
  });

  it('should not display equality button if VILLAGEOIS round and BOUC dead', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
        statuses: new Set(),
        isDead: true,
      },
    ]);

    mockRound$.set({
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should not display equality button if not VILLAGEOIS round and BOUC alive', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.BOUC,
        card: PlayerRoleEnum.BOUC,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    mockRound$.set({
      role: RoundEnum.CUPIDON,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should not display equality button if VILLAGEOIS round and no BOUC', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    mockRound$.set({
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should submit equality on equality', () => {
    jest.spyOn(gameService, 'submitRoundAction');

    component['onEquality']();

    expect(gameService.submitRoundAction).toHaveBeenCalledWith(
      [],
      undefined,
      true,
    );
  });
});
