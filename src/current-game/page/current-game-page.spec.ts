import { PlayerCard } from '@/shared/components/player-card/player-card';
import { PlayerDisplayMode } from '@/shared/components/player-card/player-display-mode';
import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '@/current-game/orchestrator/current-round-config/current-round-config-store';
import { DayCountStore } from '@/current-game/orchestrator/day-count/day-count-store';
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
import CurrentGamePage from './current-game-page';
import { GameOrchestrator } from '../orchestrator/game-orchestrator';

@Component({
  selector: 'lgmj-player-card',
  standalone: true,
  template: '',
})
export class PlayerStubComponent {
  readonly player = input.required<Player>();
  readonly displayMode = input<PlayerDisplayMode>(PlayerDisplayMode.DEFAULT);
  readonly disabled = input(false);
  readonly noSelfRole = input<boolean>(false);
  readonly selectableRoles = input<PlayerRole[]>([]);
  readonly checked = model(false);
  readonly roleChange = output<PlayerRole>();
}

describe('GamePage', () => {
  let component: CurrentGamePage;

  let mockPlayers: Player[];
  let mockRoundConfig: RoundConfig;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockRoundConfig$: WritableSignal<RoundConfig | null>;

  ngMocks.faster();

  beforeAll(async () =>
    MockBuilder(CurrentGamePage)
      .replace(PlayerCard, PlayerStubComponent)
      .mock(GameOrchestrator)
      .mock(CurrentPlayersStore)
      .mock(CurrentRoundConfigStore)
      .mock(DayCountStore),
  );

  beforeAll(() => {
    mockPlayers = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$ = signal(mockPlayers);
    mockRoundConfig = {
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    };
    mockRoundConfig$ = signal(mockRoundConfig);

    MockInstance(GameOrchestrator, () => ({
      submitRoundAction: jest.fn(),
    }));
    MockInstance(CurrentPlayersStore, 'state', mockPlayers$);
    MockInstance(CurrentRoundConfigStore, 'state', mockRoundConfig$);
    MockInstance(DayCountStore, 'state', signal(0));
  });

  beforeEach(() => {
    component = MockRender(CurrentGamePage).point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get players from GameOrchestrator', () => {
    expect(component['players']()).toEqual(mockPlayers);
  });

  it('should get round from GameOrchestrator', () => {
    expect(component['roundConfig']()).toEqual(mockRoundConfig);
  });

  it('should set playerDisplayMode as EDIT_ROLE if round type ROLES', () => {
    mockRoundConfig$.set({
      round: Round.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.ROLES,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayMode.EDIT_ROLE,
    );
  });

  it('should set playerDisplayMode as SELECT_SINGLE if only one selectable', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayMode.SELECT_SINGLE,
    );
  });

  it('should set playerDisplayMode as SELECT_MULTI if multi selectable', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(
      PlayerDisplayMode.SELECT_MULTI,
    );
  });

  it('should set playerDisplayMode as DEFAULT if no selectable', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    expect(component['playerDisplayMode']()).toEqual(PlayerDisplayMode.DEFAULT);
  });

  it('should have submit disabled if should select one role and no selection', () => {
    mockRoundConfig$.set({
      round: Round.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.ROLES,
    });
    component['selectedRole'].set(undefined);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit disabled if should select one and no selection', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['selectedPlayer'].set(undefined);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit disabled if should select multiple and more selected than max', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0, 1, 2);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit disabled if should select multiple and less selected than min', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 2,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0);
    expect(component['submitDisabled']()).toEqual(true);
  });

  it('should have submit enabled if should select one role and one selected', () => {
    mockRoundConfig$.set({
      round: Round.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.ROLES,
    });
    component['selectedRole'].set(PlayerRole.LOUP_GAROU);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if should select one and one selected', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['selectedPlayer'].set(0);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if can select one and none selected', () => {
    mockRoundConfig$.set({
      round: Round.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.ROLES,
    });
    component['selectedRole'].set(undefined);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if can select one and none selected', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['selectedPlayer'].set(undefined);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if should select multiple and selected in range', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0);
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should have submit enabled if should select none', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [],
      maxSelectable: 0,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    expect(component['submitDisabled']()).toEqual(false);
  });

  it('should select role', () => {
    mockRoundConfig$.set({
      round: Round.CHIEN_LOUP,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: false,
      type: RoundType.ROLES,
    });
    component['onRoleSelect'](PlayerRole.LOUP_GAROU);

    expect(component['selectedRole']()).toEqual(PlayerRole.LOUP_GAROU);
  });

  it('should single select player', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['onPlayerChecked'](0, true);

    expect(component['selectedPlayer']()).toEqual(0);
  });

  it('should multi select player', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['onPlayerChecked'](0, true);

    expect(component['selectedPlayers']().has(0)).toEqual(true);
  });

  it('should multi unselect player', () => {
    mockRoundConfig$.set({
      round: Round.LOUP_GAROU,
      selectablePlayers: [0, 1],
      maxSelectable: 2,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });
    component['playersMultiSelection'].setSelection(0);
    component['onPlayerChecked'](0, false);

    expect(component['selectedPlayers']().has(0)).toEqual(false);
  });

  it('should submit selectedRole to GameOrchestrator on submit', () => {
    component['selectedRole'].set(PlayerRole.LOUP_GAROU);

    component['onSubmit']();

    const submitRoundActionSpy =
      ngMocks.get(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith(
      [],
      PlayerRole.LOUP_GAROU,
    );
  });

  it('should submit selectedPlayer to GameOrchestrator on submit if SELECT_SINGLE', () => {
    component['selectedPlayer'].set(0);

    component['onSubmit']();

    const submitRoundActionSpy =
      ngMocks.get(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([0], undefined);
  });

  it('should submit selectedPlayers to GameOrchestrator on submit if SELECT_MULTI', () => {
    component['playersMultiSelection'].setSelection(0, 1);

    component['onSubmit']();

    const submitRoundActionSpy =
      ngMocks.get(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([0, 1], undefined);
  });

  it('should reset selectedRole after submit', () => {
    component['selectedRole'].set(PlayerRole.LOUP_GAROU);

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
        role: PlayerRole.BOUC,
        card: PlayerRole.BOUC,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    mockRoundConfig$.set({
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(true);
  });

  it('should not display equality button if VILLAGEOIS round and BOUC dead', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.BOUC,
        card: PlayerRole.BOUC,
        statuses: new Set(),
        isDead: true,
      },
    ]);

    mockRoundConfig$.set({
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should not display equality button if not VILLAGEOIS round and BOUC alive', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.BOUC,
        card: PlayerRole.BOUC,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    mockRoundConfig$.set({
      round: Round.CUPIDON,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: false,
      type: RoundType.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should not display equality button if VILLAGEOIS round and no BOUC', () => {
    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    mockRoundConfig$.set({
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    });

    expect(component['displayEqualityButton']()).toEqual(false);
  });

  it('should submit equality on equality', () => {
    component['onEquality']();

    const submitRoundActionSpy =
      ngMocks.get(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([], undefined, true);
  });

  it('should be beforeGame if round is SECTAIRE', () => {
    mockRoundConfig$.set({
      round: Round.SECTAIRE,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    });

    expect(component['isBeforeGame']()).toEqual(true);
  });

  it('should not be beforeGame if round is not SECTAIRE', () => {
    mockRoundConfig$.set({
      round: Round.VILLAGEOIS,
      selectablePlayers: [0],
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: true,
      type: RoundType.DEFAULT,
    });

    expect(component['isBeforeGame']()).toEqual(false);
  });

  afterAll(MockReset);
});
