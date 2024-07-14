import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import { PlayerRoleNamePipe } from '@/pipes/player-role-name/player-role-name.pipe';
import { PlayerComponent } from './player.component';

const MOCK_PLAYER: Player = {
  id: 0,
  name: 'player',
  role: PlayerRoleEnum.VILLAGEOIS,
  card: PlayerRoleEnum.VILLAGEOIS,
  statuses: new Set(),
  isDead: false,
};

describe('PlayerComponent', () => {
  MockInstance.scope();

  beforeEach(async () => MockBuilder(PlayerComponent));

  beforeEach(async () => {
    return MockInstance(PlayerRoleNamePipe, () => ({
      transform: (role) => {
        switch (role) {
          case PlayerRoleEnum.VILLAGEOIS:
            return 'Villageois';
          case PlayerRoleEnum.LOUP_GAROU:
            return 'Loup';
          case PlayerRoleEnum.CUPIDON:
            return 'Cupidon';
          default:
            return '';
        }
      },
    }));
  });

  it('should create', () => {
    const component = MockRender(PlayerComponent, { player: MOCK_PLAYER }).point
      .componentInstance;
    expect(component).toBeTruthy();
  });

  it('should sort roles alphabetically on set', () => {
    const component = MockRender(PlayerComponent, {
      player: MOCK_PLAYER,
      selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
    }).point.componentInstance;

    expect(component['sortedRoles']()).toEqual([
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.VILLAGEOIS,
    ]);
  });

  it('should add current role to selectable roles on set', () => {
    const component = MockRender(PlayerComponent, {
      player: {
        ...MOCK_PLAYER,
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
      },
      selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
    }).point.componentInstance;

    expect(component['sortedRoles']().includes(PlayerRoleEnum.CUPIDON)).toEqual(
      true,
    );
  });

  it('should not add current role to selectable roles on set if noSelfRole', () => {
    const component = MockRender(PlayerComponent, {
      player: {
        ...MOCK_PLAYER,
        role: PlayerRoleEnum.CUPIDON,
        card: PlayerRoleEnum.CUPIDON,
      },
      selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
      noSelfRole: true,
    }).point.componentInstance;

    expect(component['sortedRoles']().includes(PlayerRoleEnum.CUPIDON)).toEqual(
      false,
    );
  });

  it('should not add current role NOT_SELECTED to selectable roles on set', () => {
    const component = MockRender(PlayerComponent, {
      player: {
        ...MOCK_PLAYER,
        role: PlayerRoleEnum.NOT_SELECTED,
        card: PlayerRoleEnum.NOT_SELECTED,
      },
      selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
    }).point.componentInstance;

    expect(
      component['sortedRoles']().includes(PlayerRoleEnum.NOT_SELECTED),
    ).toEqual(false);
  });
});
