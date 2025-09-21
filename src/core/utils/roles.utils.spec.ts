import { CardList } from '@/shared/types/card-list';
import { PlayerRole } from '@/types/player-role';
import { Player } from '@/shared/types/player';
import {
  getNotPlayedRoles,
  isKilledByInnocents,
  isLoupGarou,
  removePowersFromInnocents,
} from './roles.utils';
import { PlayerStatus } from '@/types/player-status';
import * as statusUtils from '@/utils/status.utils';

describe('getNotPlayedRoles', () => {
  it('should return not played cards', () => {
    const cardList: CardList = {
      selectedRoles: new Set([
        PlayerRole.CUPIDON,
        PlayerRole.VOYANTE,
        PlayerRole.SOEUR,
      ]),
      loupGarou: 1,
      villageois: 1,
      playersNumber: 3,
    };

    const players: Player[] = [
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
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.SOEUR,
        card: PlayerRole.SOEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const notPlayedRoles = getNotPlayedRoles(players, cardList);
    expect(notPlayedRoles).toEqual([PlayerRole.CUPIDON, PlayerRole.VOYANTE]);
  });
});

describe('isLoupGarou', () => {
  it('should return true if player has loup-garou role', () => {
    const result = isLoupGarou({
      role: PlayerRole.GRAND_MECHANT_LOUP,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player has INFECTED status', () => {
    const result = isLoupGarou({
      role: PlayerRole.VILLAGEOIS,
      statuses: new Set([PlayerStatus.INFECTED]),
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player has not INFECTED status', () => {
    const result = isLoupGarou({
      role: PlayerRole.VILLAGEOIS,
      statuses: new Set(),
    } as Player);
    expect(result).toEqual(false);
  });
});

describe('isKilledByInnocents', () => {
  it('should return true if player is killed by CHASSEUR', () => {
    const result = isKilledByInnocents({
      role: PlayerRole.ANCIEN,
      killedBy: PlayerRole.CHASSEUR,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return true if player is killed by SORCIERE', () => {
    const result = isKilledByInnocents({
      role: PlayerRole.ANCIEN,
      killedBy: PlayerRole.SORCIERE,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return true if player is killed by VILLAGEOIS', () => {
    const result = isKilledByInnocents({
      role: PlayerRole.ANCIEN,
      killedBy: PlayerRole.VILLAGEOIS,
    } as Player);
    expect(result).toEqual(true);
  });

  it('should return false if player is killed by LOUP_GAROU', () => {
    const result = isKilledByInnocents({
      role: PlayerRole.ANCIEN,
      killedBy: PlayerRole.LOUP_GAROU,
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
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([
          PlayerStatus.HEALTH_POTION,
          PlayerStatus.DEATH_POTION,
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
      PlayerStatus.HEALTH_POTION,
    );
  });

  it('should remove DEATH_POTION from SORCIERE', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set([
          PlayerStatus.HEALTH_POTION,
          PlayerStatus.DEATH_POTION,
        ]),
        isDead: false,
      },
    ];
    const firstReturn = { ...mockPlayers[0] };
    const secondReturn = { ...mockPlayers[0] };
    jest
      .spyOn(statusUtils, 'removeStatusFromPlayer')
      .mockReturnValueOnce(firstReturn)
      .mockReturnValueOnce(secondReturn);

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0]).toBe(secondReturn);
    expect(statusUtils.removeStatusFromPlayer).toHaveBeenCalledWith(
      firstReturn,
      PlayerStatus.DEATH_POTION,
    );
  });

  it('should transform CHASSEUR to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.CHASSEUR,
        card: PlayerRole.CHASSEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform CUPIDON to VILLAGEOIS', () => {
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

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform PETITE_FILLE to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.PETITE_FILLE,
        card: PlayerRole.PETITE_FILLE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform SORCIERE to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SORCIERE,
        card: PlayerRole.SORCIERE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform VOYANTE to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VOYANTE,
        card: PlayerRole.VOYANTE,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform CORBEAU to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.CORBEAU,
        card: PlayerRole.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform SALVATEUR to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.SALVATEUR,
        card: PlayerRole.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform MONTREUR_OURS to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.MONTREUR_OURS,
        card: PlayerRole.MONTREUR_OURS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });

  it('should transform RENARD to VILLAGEOIS', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.RENARD,
        card: PlayerRole.RENARD,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const newPlayers = removePowersFromInnocents(mockPlayers);

    expect(newPlayers[0].role).toEqual(PlayerRole.VILLAGEOIS);
    expect(newPlayers[0]).not.toBe(mockPlayers[0]);
  });
});
