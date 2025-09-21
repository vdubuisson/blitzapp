import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { ModalManager } from '@/layout/modal/modal-manager';
import { TestBed } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { firstValueFrom, of } from 'rxjs';
import { VoyanteRoundHandler } from './voyante-round.handler';

describe('VoyanteRoundHandler', () => {
  let roundHandler: VoyanteRoundHandler;

  let modalManager: ModalManager;

  beforeAll(() => {
    modalManager = MockService(ModalManager);
    jest.spyOn(modalManager, 'showPlayerCard').mockReturnValue(of(undefined));

    TestBed.configureTestingModule({
      providers: [{ provide: ModalManager, useValue: modalManager }],
    });
    TestBed.runInInjectionContext(
      () => (roundHandler = new VoyanteRoundHandler()),
    );
  });

  it('should not be only once', () => {
    expect(roundHandler.isOnlyOnce).toEqual(false);
  });

  it('should not be during day', () => {
    expect(roundHandler.isDuringDay).toEqual(false);
  });

  it('should return not during day', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.isDuringDay).toEqual(false);
  });

  it('should be PLAYERS type', () => {
    expect(roundHandler.type).toEqual(RoundType.PLAYERS);
  });

  it('should return PLAYERS type', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.type).toEqual(RoundType.PLAYERS);
  });

  it('should return players without change', async () => {
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
    ];

    const newPlayers = await firstValueFrom(
      roundHandler.handleAction(players, [1]),
    );
    expect(newPlayers).toEqual(players);
  });

  it('should show playerCard modal with player card', async () => {
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
        card: PlayerRole.CHIEN_LOUP,
        statuses: new Set(),
        isDead: false,
      },
    ];

    await firstValueFrom(roundHandler.handleAction(players, [1]));
    expect(modalManager.showPlayerCard).toHaveBeenCalledWith(
      PlayerRole.CHIEN_LOUP,
    );
  });

  it('should return all alive players except VOYANTE as selectable players', () => {
    const players: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: true,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.VOYANTE,
        card: PlayerRole.VOYANTE,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];

    const roundConfig = roundHandler.getRoundConfig(players);

    expect(roundConfig.selectablePlayers).toEqual([2]);
  });

  it('should return VOYANTE as round role', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.round).toEqual(Round.VOYANTE);
  });

  it('should return 1 as maxSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.maxSelectable).toEqual(1);
  });

  it('should return 0 as minSelectable players', () => {
    const roundConfig = roundHandler.getRoundConfig([]);

    expect(roundConfig.minSelectable).toEqual(0);
  });
});
