import { PlayerComponent } from '@/components/player/player.component';
import { PlayerDisplayModeEnum } from '@/enums/player-display-mode.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { RoundConfig } from '@/models/round-config.model';
import { GameService } from '@/services/game/game.service';
import { CurrentPlayersStore } from '@/stores/current-players/current-players.store';
import { CurrentRoundConfigStore } from '@/stores/current-round/current-round-config.store';
import { DayCountStore } from '@/stores/day-count/day-count.store';
import {
  Component,
  WritableSignal,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import GamePage from './game.page';

@Component({
  selector: 'lgmj-player',
  standalone: true,
  template: '',
})
export class PlayerStubComponent {
  readonly player = input.required<Player>();
  readonly displayMode = input<PlayerDisplayModeEnum>(
    PlayerDisplayModeEnum.DEFAULT,
  );
  readonly disabled = input(false);
  readonly noSelfRole = input<boolean>(false);
  readonly selectableRoles = input<PlayerRoleEnum[]>([]);
  readonly checked = model(false);
  readonly roleChange = output<PlayerRoleEnum>();
}

describe('GamePage', () => {
  let component: GamePage;

  let mockPlayers: Player[];
  let mockRoundConfig: RoundConfig;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockRoundConfig$: WritableSignal<RoundConfig | null>;

  ngMocks.faster();

  beforeAll(async () =>
    MockBuilder(GamePage)
      .replace(PlayerComponent, PlayerStubComponent)
      .mock(GameService)
      .mock(CurrentPlayersStore)
      .mock(CurrentRoundConfigStore)
      .mock(DayCountStore),
  );

  beforeAll(() => {
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
    mockRoundConfig = {
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    };
    mockRoundConfig$ = signal(mockRoundConfig);

    MockInstance(GameService, () => ({
      submitRoundAction: jest.fn(),
    }));
    MockInstance(CurrentPlayersStore, 'state', mockPlayers$);
    MockInstance(CurrentRoundConfigStore, 'state', mockRoundConfig$);
    MockInstance(DayCountStore, 'state', signal(0));
  });

  beforeEach(() => {
    component = MockRender(GamePage).point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players from GameService', () => {
    expect(component['players']()).toEqual(mockPlayers);
  });

  it('should get round from GameService', () => {
    expect(component['roundConfig']()).toEqual(mockRoundConfig);
  });

  it('should set playerDisplayMode as EDIT_ROLE if round type ROLES', () => {
    mockRoundConfig$.set({
      round: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.EDIT_ROLE,
    );
  });

  it('should set playerDisplayMode as SELECT_SINGLE if only one selectable', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.SELECT_SINGLE,
    );
  });

  it('should set playerDisplayMode as SELECT_MULTI if multi selectable', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.SELECT_MULTI,
    );
  });

  it('should set playerDisplayMode as DEFAULT if no selectable', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayModeEnum.DEFAULT,
    );
  });

  it('should have submit disabled if should select one role and no selection', () => {
    mockRoundConfig$.set({
      round: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['selectedRole'].set(undefined);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit disabled if should select one and no selection', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayer'].set(undefined);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit disabled if should select multiple and more selected than max', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0, 1, 2);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit disabled if should select multiple and less selected than min', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 2,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit enabled if should select one role and one selected', () => {
    mockRoundConfig$.set({
      round: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if should select one and one selected', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayer'].set(0);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if can select one and none selected', () => {
    mockRoundConfig$.set({
      round: RoundEnum.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.ROLES,
    });
    component['selectedRole'].set(undefined);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if can select one and none selected', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['selectedPlayer'].set(undefined);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if should select multiple and selected in range', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if should select none', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should select role', () => {
    mockRoundConfig$.set({
      round: RoundEnum.CHIEN_LOUP,
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
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['onPlayerChecked'](0, true);

    expect(component['selectedPlayer']()).toEqual(0);
  });

  it('should multi select player', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['onPlayerChecked'](0, true);

    expect(component['selectedPlayers']().has(0)).toEqual(true);
  });

  it('should multi unselect player', () => {
    mockRoundConfig$.set({
      round: RoundEnum.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundTypeEnum.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0);
    component['onPlayerChecked'](0, false);

    expect(component['selectedPlayers']().has(0)).toEqual(false);
  });

  it('should submit selectedRole to GameService on submit', () => {
    component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);

    component['onSubmit']();

    const submitRoundActionSpy = ngMocks.get(GameService).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith(
      [],
      PlayerRoleEnum.LOUP_GAROU,
    );
  });

  it('should submit selectedPlayer to GameService on submit if SELECT_SINGLE', () => {
    component['selectedPlayer'].set(0);

    component['onSubmit']();

    const submitRoundActionSpy = ngMocks.get(GameService).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([0], undefined);
  });

  it('should submit selectedPlayers to GameService on submit if SELECT_MULTI', () => {
    component['playersMultiSelection'].setSelection(0, 1);

    component['onSubmit']();

    const submitRoundActionSpy = ngMocks.get(GameService).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([0, 1], undefined);
  });

  it('should reset selectedRole after submit', () => {
    component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);

    component['onSubmit']();

    expect(component['selectedRole']()).toEqual(undefined);
  });

  it('should reset selectedPlayer after submit', () => {
    component['selectedPlayer'].set(0);

    component['onSubmit']();

    expect(component['selectedPlayer']()).toEqual(undefined);
  });

  it('should reset selectedPlayers after submit', () => {
    component['playersMultiSelection'].setSelection(0, 1);

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

    mockRoundConfig$.set({
      round: RoundEnum.VILLAGEOIS,
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

    mockRoundConfig$.set({
      round: RoundEnum.VILLAGEOIS,
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

    mockRoundConfig$.set({
      round: RoundEnum.CUPIDON,
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

    mockRoundConfig$.set({
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should submit equality on equality', () => {
    component['onEquality']();

    const submitRoundActionSpy = ngMocks.get(GameService).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([], undefined, true);
  });

  it('should be beforeGame if round is SECTAIRE', () => {
    mockRoundConfig$.set({
      round: RoundEnum.SECTAIRE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['isBeforeGame']()).toEqual(true);
  });

  it('should not be beforeGame if round is not SECTAIRE', () => {
    mockRoundConfig$.set({
      round: RoundEnum.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundTypeEnum.DEFAULT,
    });

    expect(component['isBeforeGame']()).toEqual(false);
  });

  afterAll(MockReset);
});
