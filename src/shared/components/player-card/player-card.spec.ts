import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { PlayerCard } from './player-card';

const MOCK_PLAYER: Player = {
  id: 0,
  name: 'player',
  role: PlayerRole.VILLAGEOIS,
  card: PlayerRole.VILLAGEOIS,
  statuses: new Set(),
  isDead: false,
};

describe('PlayerCard', () => {
  ngMocks.faster();

  beforeAll(async () => MockBuilder(PlayerCard));

  beforeAll(() => {
    MockInstance(PlayerRoleNamePipe, () => ({
      transform: (role) => {
        switch (role) {
          case PlayerRole.VILLAGEOIS:
            return 'Villageois';
          case PlayerRole.LOUP_GAROU:
            return 'Loup';
          case PlayerRole.CUPIDON:
            return 'Cupidon';
          default:
            return '';
        }
      },
    }));
  });

  it('should create', () => {
    const component = MockRender(PlayerCard, { player: MOCK_PLAYER }).point
      .componentInstance;
    expect(component).toBeTruthy();
  });

  it('should sort roles alphabetically on set', () => {
    const component = MockRender(PlayerCard, {
      player: MOCK_PLAYER,
      selectableRoles: [PlayerRole.VILLAGEOIS, PlayerRole.LOUP_GAROU],
    }).point.componentInstance;

    expect(component['sortedRoles']()).toEqual([
      PlayerRole.LOUP_GAROU,
      PlayerRole.VILLAGEOIS,
    ]);
  });

  it('should add current role to selectable roles on set', () => {
    const component = MockRender(PlayerCard, {
      player: {
        ...MOCK_PLAYER,
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
      },
      selectableRoles: [PlayerRole.VILLAGEOIS, PlayerRole.LOUP_GAROU],
    }).point.componentInstance;

    expect(component['sortedRoles']().includes(PlayerRole.CUPIDON)).toEqual(
      true,
    );
  });

  it('should not add current role to selectable roles on set if noSelfRole', () => {
    const component = MockRender(PlayerCard, {
      player: {
        ...MOCK_PLAYER,
        role: PlayerRole.CUPIDON,
        card: PlayerRole.CUPIDON,
      },
      selectableRoles: [PlayerRole.VILLAGEOIS, PlayerRole.LOUP_GAROU],
      noSelfRole: true,
    }).point.componentInstance;

    expect(component['sortedRoles']().includes(PlayerRole.CUPIDON)).toEqual(
      false,
    );
  });

  it('should not add current role NOT_SELECTED to selectable roles on set', () => {
    const component = MockRender(PlayerCard, {
      player: {
        ...MOCK_PLAYER,
        role: PlayerRole.NOT_SELECTED,
        card: PlayerRole.NOT_SELECTED,
      },
      selectableRoles: [PlayerRole.VILLAGEOIS, PlayerRole.LOUP_GAROU],
    }).point.componentInstance;

    expect(
      component['sortedRoles']().includes(PlayerRole.NOT_SELECTED),
    ).toEqual(false);
  });

  afterAll(MockReset);
});
