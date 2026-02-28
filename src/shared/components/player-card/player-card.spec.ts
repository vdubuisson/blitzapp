import { SelectOverlayManager } from '@/layout/select-overlay/select-overlay-manager';
import { PlayerRoleImagePipe } from '@/shared/pipes/player-role-image/player-role-image-pipe';
import { PlayerRoleNamePipe } from '@/shared/pipes/player-role-name/player-role-name-pipe';
import { PlayerStatusIconPipe } from '@/shared/pipes/player-status-icon/player-status-icon-pipe';
import { Player } from '@/shared/types/player';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { mockProvider } from '@ngneat/spectator';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective, MockPipes } from 'ng-mocks';
import { PlayerCard } from './player-card';

const MOCK_PLAYER: Player = {
  id: 0,
  name: 'player',
  role: PlayerRoleEnum.VILLAGEOIS,
  card: PlayerRoleEnum.VILLAGEOIS,
  statuses: new Set(),
  isDead: false,
};

describe('PlayerCard', () => {
  let spectator: Spectator<PlayerCard>;

  const createComponent = createComponentFactory({
    component: PlayerCard,
    mocks: [SelectOverlayManager],
    imports: [
      ...MockPipes(PlayerRoleImagePipe, PlayerStatusIconPipe),
      MockDirective(NgOptimizedImage),
      MockComponent(FaIconComponent),
    ],
    providers: [
      mockProvider(PlayerRoleNamePipe, {
        transform: (role: PlayerRole) => {
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
      }),
    ],
  });

  it('should create', () => {
    spectator = createComponent({
      props: { player: MOCK_PLAYER },
    });
    expect(spectator).toBeTruthy();
  });

  it('should sort roles alphabetically on set', () => {
    spectator = createComponent({
      props: {
        player: MOCK_PLAYER,
        selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
      },
    });

    expect(spectator.component['sortedRoles']()).toEqual([
      PlayerRoleEnum.LOUP_GAROU,
      PlayerRoleEnum.VILLAGEOIS,
    ]);
  });

  it('should add current role to selectable roles on set', () => {
    spectator = createComponent({
      props: {
        player: {
          ...MOCK_PLAYER,
          role: PlayerRoleEnum.CUPIDON,
          card: PlayerRoleEnum.CUPIDON,
        },
        selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
      },
    });

    expect(
      spectator.component['sortedRoles']().includes(PlayerRoleEnum.CUPIDON),
    ).toEqual(true);
  });

  it('should not add current role to selectable roles on set if noSelfRole', () => {
    spectator = createComponent({
      props: {
        player: {
          ...MOCK_PLAYER,
          role: PlayerRoleEnum.CUPIDON,
          card: PlayerRoleEnum.CUPIDON,
        },
        selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
        noSelfRole: true,
      },
    });

    expect(
      spectator.component['sortedRoles']().includes(PlayerRoleEnum.CUPIDON),
    ).toEqual(false);
  });

  it('should not add current role NOT_SELECTED to selectable roles on set', () => {
    spectator = createComponent({
      props: {
        player: {
          ...MOCK_PLAYER,
          role: PlayerRoleEnum.NOT_SELECTED,
          card: PlayerRoleEnum.NOT_SELECTED,
        },
        selectableRoles: [PlayerRoleEnum.VILLAGEOIS, PlayerRoleEnum.LOUP_GAROU],
      },
    });

    expect(
      spectator.component['sortedRoles']().includes(
        PlayerRoleEnum.NOT_SELECTED,
      ),
    ).toEqual(false);
  });
});
