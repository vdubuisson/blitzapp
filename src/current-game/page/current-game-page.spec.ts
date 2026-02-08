import { CurrentPlayersStore } from '@/current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '@/current-game/orchestrator/current-round-config/current-round-config-store';
import { DayCountStore } from '@/current-game/orchestrator/day-count/day-count-store';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { PlayerCard } from '@/shared/components/player-card/player-card';
import { PlayerCardMock } from '@/shared/components/player-card/player-card.mock';
import { PlayerDisplayModeEnum } from '@/shared/components/player-card/player-display-mode';
import { Player } from '@/shared/types/player';
import { RoundConfig } from '@/shared/types/round-config';
import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum } from '@/types/round';
import { signal, WritableSignal } from '@angular/core';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/jest';
import { MockPipe } from 'ng-mocks';
import { GameOrchestrator } from '../orchestrator/game-orchestrator';
import CurrentGamePage from './current-game-page';
import { RoundNamePipe } from './round-name/round-name-pipe';

describe('CurrentGamePage', () => {
  let spectator: Spectator<CurrentGamePage>;

  const createComponent = createComponentFactory({
    component: CurrentGamePage,
    componentImports: [[PlayerCard, PlayerCardMock]],
    imports: [MockPipe(RoundNamePipe)],
    mocks: [GameOrchestrator],
  });

  let mockPlayers: Player[];
  let mockRoundConfig: RoundConfig;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockRoundConfig$: WritableSignal<RoundConfig | null>;

  beforeEach(() => {
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

    spectator = createComponent({
      providers: [
        mockProvider(CurrentPlayersStore, {
          state: mockPlayers$,
        }),
        mockProvider(CurrentRoundConfigStore, {
          state: mockRoundConfig$,
        }),
        mockProvider(DayCountStore, {
          state: signal(0),
        }),
      ],
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should get players from GameOrchestrator', () => {
    expect(spectator.component['players']()).toEqual(mockPlayers);
  });

  it('should get round from GameOrchestrator', () => {
    expect(spectator.component['roundConfig']()).toEqual(mockRoundConfig);
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
    expect(spectator.component['playerDisplayMode']()).toEqual(
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
    expect(spectator.component['playerDisplayMode']()).toEqual(
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
    expect(spectator.component['playerDisplayMode']()).toEqual(
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
    expect(spectator.component['playerDisplayMode']()).toEqual(
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
    spectator.component['selectedRole'].set(undefined);
    expect(spectator.component['submitDisabled']()).toEqual(true);
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
    spectator.component['selectedPlayer'].set(undefined);
    expect(spectator.component['submitDisabled']()).toEqual(true);
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
    spectator.component['playersMultiSelection'].setSelection(0, 1, 2);
    expect(spectator.component['submitDisabled']()).toEqual(true);
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
    spectator.component['playersMultiSelection'].setSelection(0);
    expect(spectator.component['submitDisabled']()).toEqual(true);
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
    spectator.component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);
    expect(spectator.component['submitDisabled']()).toEqual(false);
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
    spectator.component['selectedPlayer'].set(0);
    expect(spectator.component['submitDisabled']()).toEqual(false);
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
    spectator.component['selectedRole'].set(undefined);
    expect(spectator.component['submitDisabled']()).toEqual(false);
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
    spectator.component['selectedPlayer'].set(undefined);
    expect(spectator.component['submitDisabled']()).toEqual(false);
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
    spectator.component['playersMultiSelection'].setSelection(0);
    expect(spectator.component['submitDisabled']()).toEqual(false);
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
    expect(spectator.component['submitDisabled']()).toEqual(false);
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
    spectator.component['onRoleSelect'](PlayerRoleEnum.LOUP_GAROU);

    expect(spectator.component['selectedRole']()).toEqual(
      PlayerRoleEnum.LOUP_GAROU,
    );
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
    spectator.component['onPlayerChecked'](0, true);

    expect(spectator.component['selectedPlayer']()).toEqual(0);
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
    spectator.component['onPlayerChecked'](0, true);

    expect(spectator.component['selectedPlayers']().has(0)).toEqual(true);
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
    spectator.component['playersMultiSelection'].setSelection(0);
    spectator.component['onPlayerChecked'](0, false);

    expect(spectator.component['selectedPlayers']().has(0)).toEqual(false);
  });

  it('should submit selectedRole to GameOrchestrator on submit', () => {
    spectator.component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);

    spectator.component['onSubmit']();

    const submitRoundActionSpy =
      spectator.inject(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith(
      [],
      PlayerRoleEnum.LOUP_GAROU,
    );
  });

  it('should submit selectedPlayer to GameOrchestrator on submit if SELECT_SINGLE', () => {
    spectator.component['selectedPlayer'].set(0);

    spectator.component['onSubmit']();

    const submitRoundActionSpy =
      spectator.inject(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([0], undefined);
  });

  it('should submit selectedPlayers to GameOrchestrator on submit if SELECT_MULTI', () => {
    spectator.component['playersMultiSelection'].setSelection(0, 1);

    spectator.component['onSubmit']();

    const submitRoundActionSpy =
      spectator.inject(GameOrchestrator).submitRoundAction;
    expect(submitRoundActionSpy).toHaveBeenCalledWith([0, 1], undefined);
  });

  it('should reset selectedRole after submit', () => {
    spectator.component['selectedRole'].set(PlayerRoleEnum.LOUP_GAROU);

    spectator.component['onSubmit']();

    expect(spectator.component['selectedRole']()).toEqual(undefined);
  });

  it('should reset selectedPlayer after submit', () => {
    spectator.component['selectedPlayer'].set(0);

    spectator.component['onSubmit']();

    expect(spectator.component['selectedPlayer']()).toEqual(undefined);
  });

  it('should reset selectedPlayers after submit', () => {
    spectator.component['playersMultiSelection'].setSelection(0, 1);

    spectator.component['onSubmit']();

    expect(spectator.component['selectedPlayers']().size).toEqual(0);
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

    expect(spectator.component['displayEqualityButton']()).toEqual(true);
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

    expect(spectator.component['displayEqualityButton']()).toEqual(false);
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

    expect(spectator.component['displayEqualityButton']()).toEqual(false);
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

    expect(spectator.component['displayEqualityButton']()).toEqual(false);
  });

  it('should submit equality on equality', () => {
    spectator.component['onEquality']();

    const submitRoundActionSpy =
      spectator.inject(GameOrchestrator).submitRoundAction;
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

    expect(spectator.component['isBeforeGame']()).toEqual(true);
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

    expect(spectator.component['isBeforeGame']()).toEqual(false);
  });
});
