import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { PlayerCard } from '@/shared/components/player-card/player-card';
import {
  PlayerDisplayMode,
  PlayerDisplayModeEnum,
} from '@/shared/components/player-card/player-display-mode';
import { CardList } from '@/shared/types/card-list';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import {
  Component,
  input,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective } from 'ng-mocks';
import NewGamePlayersRolesPage from './new-game-players-roles-page';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-player-card',
  standalone: true,
  template: '',
})
export class PlayerStubComponent {
  readonly player = input.required<Player>();
  readonly displayMode = input<PlayerDisplayMode>(
    PlayerDisplayModeEnum.DEFAULT,
  );
  readonly selectableRoles = input<PlayerRole[]>([]);
  readonly roleChange = output<PlayerRole>();
}

describe('NewGamePlayersRolesPage', () => {
  let spectator: Spectator<NewGamePlayersRolesPage>;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockCards: WritableSignal<CardList>;

  const createComponent = createComponentFactory({
    component: NewGamePlayersRolesPage,
    imports: [MockComponent(PlayerCard), MockDirective(RouterLink)],
  });

  beforeEach(() => {
    mockPlayers$ = signal([]);
    mockCards = signal({
      selectedRoles: new Set(),
      villageois: 0,
      loupGarou: 0,
      playersNumber: 0,
    });

    spectator = createComponent({
      providers: [
        mockProvider(NewGameCreator, {
          currentPlayers: mockPlayers$.asReadonly(),
          createGame: vi.fn(),
          changeRole: vi.fn(),
        }),
        mockProvider(CardChoiceStore, {
          state: mockCards,
        }),
      ],
    });
  });

  it('should get players from NewGameCreator', () => {
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

    expect(spectator.component['players']()).toEqual(mockPlayers);
  });

  it('should create game', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    spectator.component['createGame']();

    expect(newGameCreator.createGame).toHaveBeenCalled();
  });

  it('should change role', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    spectator.component['changeRole'](0, PlayerRoleEnum.SORCIERE);

    expect(newGameCreator.changeRole).toHaveBeenCalledWith(
      0,
      PlayerRoleEnum.SORCIERE,
    );
  });

  it('should affect last role to players without role if only 1 available', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    mockCards.set({
      villageois: 3,
      loupGarou: 0,
      selectedRoles: new Set(),
      playersNumber: 3,
    });

    mockPlayers$.set([
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    spectator.component['changeRole'](0, PlayerRoleEnum.VILLAGEOIS);

    expect(newGameCreator.changeRole).toHaveBeenCalledWith(
      1,
      PlayerRoleEnum.VILLAGEOIS,
    );
    expect(newGameCreator.changeRole).toHaveBeenCalledWith(
      2,
      PlayerRoleEnum.VILLAGEOIS,
    );
  });

  it('should not be able to create if there is NOT_SELECTED role', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(false);
  });

  it('should not be able to create if there is only 1 SOEUR', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(false);
  });

  it('should not be able to create if there is more than 2 SOEUR', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(false);
  });

  it('should be able to create if there is 2 SOEUR', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(true);
  });

  it('should not be able to create if there is less than 3 FRERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(false);
  });

  it('should not be able to create if there is more than 3 FRERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(false);
  });

  it('should be able to create if there is 3 FRERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['canCreate']()).toEqual(true);
  });

  it('should be able to create if there is no NOT_SELECTED role', () => {
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

    expect(spectator.component['canCreate']()).toEqual(true);
  });

  it('should not have already used unique role as available', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.CUPIDON]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(PlayerRoleEnum.CUPIDON),
    ).toEqual(false);
  });

  it('should have SOEUR as available if less than 2 SOEUR', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(PlayerRoleEnum.SOEUR),
    ).toEqual(true);
  });

  it('should not have SOEUR as available if 2 SOEUR', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(PlayerRoleEnum.SOEUR),
    ).toEqual(false);
  });

  it('should have FRERE as available if less than 3 FRERE', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(PlayerRoleEnum.FRERE),
    ).toEqual(true);
  });

  it('should not have FRERE as available if 3 FRERE', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRoleEnum.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.FRERE,
        card: PlayerRoleEnum.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(PlayerRoleEnum.FRERE),
    ).toEqual(false);
  });

  it('should have VILLAGEOIS as available if less than villageois number', () => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(
        PlayerRoleEnum.VILLAGEOIS,
      ),
    ).toEqual(true);
  });

  it('should not have VILLAGEOIS as available if equals villageois number', () => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(
        PlayerRoleEnum.VILLAGEOIS,
      ),
    ).toEqual(false);
  });

  it('should have LOUP_GAROU as available if less than loupGarou number', () => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
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

    expect(
      spectator.component['availableRoles']().includes(
        PlayerRoleEnum.LOUP_GAROU,
      ),
    ).toEqual(true);
  });

  it('should not have LOUP_GAROU as available if equals loupGarou number', () => {
    mockCards.set({
      selectedRoles: new Set(),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 2,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      spectator.component['availableRoles']().includes(
        PlayerRoleEnum.LOUP_GAROU,
      ),
    ).toEqual(false);
  });
});
