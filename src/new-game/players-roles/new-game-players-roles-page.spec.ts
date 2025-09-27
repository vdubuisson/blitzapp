import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';

import { PlayerCard } from '@/shared/components/player-card/player-card';
import { PlayerDisplayMode } from '@/shared/components/player-card/player-display-mode';
import { CardList } from '@/shared/types/card-list';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import {
  Component,
  input,
  output,
  signal,
  WritableSignal,
} from '@angular/core';
import NewGamePlayersRolesPage from './new-game-players-roles-page';

@Component({
  selector: 'lgmj-player-card',
  standalone: true,
  template: '',
})
export class PlayerStubComponent {
  readonly player = input.required<Player>();
  readonly displayMode = input<PlayerDisplayMode>(PlayerDisplayMode.DEFAULT);
  readonly selectableRoles = input<PlayerRole[]>([]);
  readonly roleChange = output<PlayerRole>();
}

describe('NewGamePlayersRolesPage', () => {
  let component: NewGamePlayersRolesPage;

  let mockPlayers$: WritableSignal<Player[]>;
  let mockCards: WritableSignal<CardList>;

  ngMocks.faster();

  beforeAll(async () =>
    MockBuilder(NewGamePlayersRolesPage)
      .replace(PlayerCard, PlayerStubComponent)
      .mock(NewGameCreator)
      .mock(CardChoiceStore),
  );

  beforeAll(() => {
    mockPlayers$ = signal([]);
    mockCards = signal({
      selectedRoles: new Set(),
      villageois: 0,
      loupGarou: 0,
      playersNumber: 0,
    });

    MockInstance(NewGameCreator, () => ({
      currentPlayers: mockPlayers$.asReadonly(),
      createGame: jest.fn(),
      changeRole: jest.fn(),
    }));

    MockInstance(CardChoiceStore, () => ({
      state: mockCards,
    }));
  });

  beforeAll(() => {
    component = MockRender(NewGamePlayersRolesPage).point.componentInstance;
  });

  it('should get players from NewGameCreator', () => {
    const mockPlayers: Player[] = [
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
    mockPlayers$.set(mockPlayers);

    expect(component['players']()).toEqual(mockPlayers);
  });

  it('should create game', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

    component['createGame']();

    expect(newGameCreator.createGame).toHaveBeenCalled();
  });

  it('should change role', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

    component['changeRole'](0, PlayerRole.SORCIERE);

    expect(newGameCreator.changeRole).toHaveBeenCalledWith(
      0,
      PlayerRole.SORCIERE,
    );
  });

  it('should affect last role to players without role if only 1 available', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

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
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ]);

    component['changeRole'](0, PlayerRole.VILLAGEOIS);

    expect(newGameCreator.changeRole).toHaveBeenCalledWith(
      1,
      PlayerRole.VILLAGEOIS,
    );
    expect(newGameCreator.changeRole).toHaveBeenCalledWith(
      2,
      PlayerRole.VILLAGEOIS,
    );
  });

  it('should not be able to create if there is NOT_SELECTED role', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  });

  it('should not be able to create if there is only 1 SOEUR', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  });

  it('should not be able to create if there is more than 2 SOEUR', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  });

  it('should be able to create if there is 2 SOEUR', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(true);
  });

  it('should not be able to create if there is less than 3 FRERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  });

  it('should not be able to create if there is more than 3 FRERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 3,
        name: 'player3',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(false);
  });

  it('should be able to create if there is 3 FRERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(true);
  });

  it('should be able to create if there is no NOT_SELECTED role', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['canCreate']()).toEqual(true);
  });

  it('should not have already used unique role as available', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRole.CUPIDON]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['availableRoles']().includes(PlayerRole.CUPIDON)).toEqual(
      false,
    );
  });

  it('should have SOEUR as available if less than 2 SOEUR', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRole.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['availableRoles']().includes(PlayerRole.SOEUR)).toEqual(
      true,
    );
  });

  it('should not have SOEUR as available if 2 SOEUR', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRole.SOEUR]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['availableRoles']().includes(PlayerRole.SOEUR)).toEqual(
      false,
    );
  });

  it('should have FRERE as available if less than 3 FRERE', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRole.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['availableRoles']().includes(PlayerRole.FRERE)).toEqual(
      true,
    );
  });

  it('should not have FRERE as available if 3 FRERE', () => {
    mockCards.set({
      selectedRoles: new Set([PlayerRole.FRERE]),
      villageois: 1,
      loupGarou: 1,
      playersNumber: 3,
    });
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.FRERE,
        card: PlayerRole.FRERE,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['availableRoles']().includes(PlayerRole.FRERE)).toEqual(
      false,
    );
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRole.VILLAGEOIS),
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRole.VILLAGEOIS),
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
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRole.LOUP_GAROU),
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
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(
      component['availableRoles']().includes(PlayerRole.LOUP_GAROU),
    ).toEqual(false);
  });

  afterAll(MockReset);
});
