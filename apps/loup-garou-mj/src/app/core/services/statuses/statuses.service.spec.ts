import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { Player } from '../../models/player.model';
import { StatusesService } from './statuses.service';

describe('StatusesService', () => {
  let service: StatusesService;

  beforeEach(() => {
    service = new StatusesService();
  });

  it('should remove RAVEN status on after-day cleaning if there is a CORBEAU', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CORBEAU,
        card: PlayerRoleEnum.CORBEAU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.RAVEN]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.RAVEN)).toEqual(false);
  });

  it('should remove PROTECTED status on after-day cleaning if SALVATEUR is dead', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.PROTECTED)).toEqual(
      false,
    );
  });

  it('should not remove PROTECTED status on after-day cleaning if SALVATEUR is alive', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.SALVATEUR,
        card: PlayerRoleEnum.SALVATEUR,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.PROTECTED]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.PROTECTED)).toEqual(
      true,
    );
  });

  it('should remove RUSTY_SWORD status on after-day cleaning', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHEVALIER,
        card: PlayerRoleEnum.CHEVALIER,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.RUSTY_SWORD)).toEqual(
      false,
    );
  });

  it('should kill player with RUSTY_SWORD status on after-day cleaning', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHEVALIER,
        card: PlayerRoleEnum.CHEVALIER,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].isDead).toEqual(true);
  });

  it('should set killed by CHEVALIER on player with RUSTY_SWORD status on after-day cleaning', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.CHEVALIER,
        card: PlayerRoleEnum.CHEVALIER,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set([PlayerStatusEnum.RUSTY_SWORD]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanStatusesAfterDay(mockPlayers);

    expect(newPlayers[1].killedBy).toEqual(PlayerRoleEnum.CHEVALIER);
  });

  it('should remove HEALTH_POTION from SORCIERE when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].statuses.has(PlayerStatusEnum.HEALTH_POTION)).toEqual(
      false,
    );
  });

  it('should remove DEATH_POTION from SORCIERE when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].statuses.has(PlayerStatusEnum.DEATH_POTION)).toEqual(
      false,
    );
  });

  it('should transform CHASSEUR to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform CUPIDON to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform PETITE_FILLE to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform SORCIERE to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform VOYANTE to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform CORBEAU to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform SALVATEUR to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform MONTREUR_OURS to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should transform RENARD to VILLAGEOIS when removing power from innocents', () => {
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

    service.removePowersFromInnocents(mockPlayers);

    expect(mockPlayers[0].role).toEqual(PlayerRoleEnum.VILLAGEOIS);
  });

  it('should remove NO_VOTE status from player', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.IDIOT,
        card: PlayerRoleEnum.IDIOT,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
      },
    ];

    const newPlayers = service.cleanNoVoteAfterDay(mockPlayers);

    expect(newPlayers[0].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(false);
    expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(false);
  });

  it('should not remove NO_VOTE status from IDIOT killedBy', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.IDIOT,
        card: PlayerRoleEnum.IDIOT,
        statuses: new Set([PlayerStatusEnum.NO_VOTE]),
        isDead: false,
        killedBy: PlayerRoleEnum.VILLAGEOIS,
      },
    ];

    const newPlayers = service.cleanNoVoteAfterDay(mockPlayers);

    expect(newPlayers[1].statuses.has(PlayerStatusEnum.NO_VOTE)).toEqual(true);
  });
});
