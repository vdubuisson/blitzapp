import { CardList } from '@/models/card-list.model';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { Player } from '@/models/player.model';
import {
  getNotPlayedRoles,
  isKilledByInnocents,
  isLoupGarou,
  removePowersFromInnocents,
} from './roles.utils';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import * as statusUtils from '@/utils/status.utils';

describe('getNotPlayedRoles', () => {
  it('should return not played cards', () => {
    const cardList: CardList = {
      selectedRoles: new Set([
        PlayerRoleEnum.CUPIDON,
        PlayerRoleEnum.VOYANTE,
        PlayerRoleEnum.SOEUR,
      ]),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 3,
    };

    const players: Player[] = [
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.SOEUR,
        card: PlayerRoleEnum.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedRoles = getNotPlayedRoles(players, cardList);
    expect(notPlayedRoles).toEqual([
      PlayerRoleEnum.CUPIDON,
      PlayerRoleEnum.VOYANTE,
    ]);
  });
});

describe('isLoupGarou', () => {
  it('should return true if player has loup-garou role', () => {
    const result = isLoupGarou({
      role: PlayerRoleEnum.GRAND_MECHANT_LOUP,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player has INFECTED status', () => {
    const result = isLoupGarou({
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set([PlayerStatusEnum.INFECTED]),
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player has not INFECTED status', () => {
    const result = isLoupGarou({
      role: PlayerRoleEnum.VILLAGEOIS,
      statuses: new Set(),
    } as Player);
    expect(result).toEqual(false);
  });
});

describe('isKilledByInnocents', () => {
  it('should return true if player is killed by CHASSEUR', () => {
    const result = isKilledByInnocents({
      role: PlayerRoleEnum.ANCIEN,
      killedBy: PlayerRoleEnum.CHASSEUR,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return true if player is killed by SORCIERE', () => {
    const result = isKilledByInnocents({
      role: PlayerRoleEnum.ANCIEN,
      killedBy: PlayerRoleEnum.SORCIERE,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return true if player is killed by VILLAGEOIS', () => {
    const result = isKilledByInnocents({
      role: PlayerRoleEnum.ANCIEN,
      killedBy: PlayerRoleEnum.VILLAGEOIS,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player is killed by LOUP_GAROU', () => {
    const result = isKilledByInnocents({
      role: PlayerRoleEnum.ANCIEN,
      killedBy: PlayerRoleEnum.LOUP_GAROU,
    } as Player);
    expect(result).toEqual(false);
  });
});

describe('removePowersFromInnocents', () => {
  it('should remove HEALTH_POTION from SORCIERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([
          PlayerStatusEnum.HEALTH_POTION,
          PlayerStatusEnum.DEATH_POTION,
        ]),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...mockPlayers[0] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockReturnValue(expectedPlayer);

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0]).toBe(expectedPlayer);
    expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
      mockPlayers[0],
      PlayerStatusEnum.HEALTH_POTION,
    );
  });

  it('should remove DEATH_POTION from SORCIERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set([
          PlayerStatusEnum.HEALTH_POTION,
          PlayerStatusEnum.DEATH_POTION,
        ]),
        isDead: false,
      },
    ];
    const expectedPlayer = { ...mockPlayers[0] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockReturnValue(expectedPlayer);

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0]).toBe(expectedPlayer);
    expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
      mockPlayers[0],
      PlayerStatusEnum.DEATH_POTION,
    );
  });

  it('should transform CHASSEUR to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHASSEUR,
        card: PlayerRoleEnum.CHASSEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform CUPIDON to VILLAGEOIS', () => {
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

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform PETITE_FILLE to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.PETITE_FILLE,
        card: PlayerRoleEnum.PETITE_FILLE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform SORCIERE to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SORCIERE,
        card: PlayerRoleEnum.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform VOYANTE to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VOYANTE,
        card: PlayerRoleEnum.VOYANTE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform CORBEAU to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform SALVATEUR to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform MONTREUR_OURS to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.MONTREUR_OURS,
        card: PlayerRoleEnum.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform RENARD to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.RENARD,
        card: PlayerRoleEnum.RENARD,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });
});
