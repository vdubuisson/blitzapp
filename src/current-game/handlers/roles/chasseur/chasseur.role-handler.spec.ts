import { PlayerRoleEnum } from '@/types/player-role';
import { RoundEnum, Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { RoundHandlersManager } from '@/game-handlers/rounds/round-handlers-manager';
import { AfterDeathRoundQueueStore } from '@/current-game/death/after-death-round-queue/after-death-round-queue-store';
import { signal } from '@angular/core';
import { ChasseurRoleHandler } from './chasseur.role-handler';
import {
  createInjectionContextFactory,
  SpectatorInjectionContext,
} from '@ngneat/spectator/vitest';

describe('ChasseurRoleHandler', () => {
  let handler: ChasseurRoleHandler;
  let spectator: SpectatorInjectionContext;
  let players: Player[];

  const createContext = createInjectionContextFactory({
    mocks: [RoundHandlersManager],
    providers: [
      {
        provide: AfterDeathRoundQueueStore,
        useValue: { state: signal<Round[]>([RoundEnum.VILLAGEOIS]) },
      },
    ],
  });

  beforeEach(() => {
    players = [
      { id: 1, name: 'Player 1', role: PlayerRoleEnum.VILLAGEOIS } as Player,
      { id: 2, name: 'Player 2', role: PlayerRoleEnum.LOUP_GAROU } as Player,
    ];

    spectator = createContext();
    handler = spectator.runInInjectionContext(() => new ChasseurRoleHandler());
  });

  it('should create an instance', () => {
    expect(handler).toBeTruthy();
    expect(handler.role).toBe(PlayerRoleEnum.CHASSEUR);
  });

  describe('prepareNewGame', () => {
    it('should return players unchanged', () => {
      const result = handler.prepareNewGame(players);
      expect(result).toBe(players);
    });

    it('should create CHASSEUR round handler', () => {
      const roundHandlersManager = spectator.inject(RoundHandlersManager);

      handler.prepareNewGame(players);

      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledWith(
        RoundEnum.CHASSEUR,
      );
      expect(roundHandlersManager.createRoundHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleDeath', () => {
    it('should add CHASSEUR round at the start of afterDeathRoundQueue', () => {
      const deadPlayer = players[0];
      const afterDeathRoundQueue = spectator.inject(AfterDeathRoundQueueStore);

      handler.handleDeath(players, deadPlayer);

      expect(afterDeathRoundQueue.state()[0]).toBe(RoundEnum.CHASSEUR);
    });
  });

  describe('cleanStatusesAfterDay', () => {
    it('should return players unchanged', () => {
      const result = handler.cleanStatusesAfterDay(players);
      expect(result).toBe(players);
    });
  });
});
