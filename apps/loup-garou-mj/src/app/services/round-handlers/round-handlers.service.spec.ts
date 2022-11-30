import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import { CapitaineRoundHandler } from '../../handlers/capitaine/capitaine-round.handler';
import { CupidonRoundHandler } from '../../handlers/cupidon/cupidon-round.handler';
import { LoupGarouRoundHandler } from '../../handlers/loup-garou/loup-garou-round.handler';
import { SorciereHealthRoundHandler } from '../../handlers/sorciere-health/sorciere-health-round.handler';
import { SorciereKillRoundHandler } from '../../handlers/sorciere-kill/sorciere-kill-round.handler';
import { VillageoisRoundHandler } from '../../handlers/villageois/villageois-round.handler';
import { RoundHandlersService } from './round-handlers.service';

describe('RoundHandlersService', () => {
  let service: RoundHandlersService;

  beforeEach(() => {
    service = new RoundHandlersService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init VILLAGEOIS round handler', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].get(RoundEnum.VILLAGEOIS)).toBeInstanceOf(
      VillageoisRoundHandler
    );
  });

  it('should return handler for VILLAGEOIS round', () => {
    const roundHandler = new VillageoisRoundHandler();
    service['roundHandlers'].set(RoundEnum.VILLAGEOIS, roundHandler);

    const testHandler = service.getHandler(RoundEnum.VILLAGEOIS);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should init CAPITAINE round handler', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].get(RoundEnum.CAPITAINE)).toBeInstanceOf(
      CapitaineRoundHandler
    );
  });

  it('should return handler for CAPITAINE round', () => {
    const roundHandler = new CapitaineRoundHandler();
    service['roundHandlers'].set(RoundEnum.CAPITAINE, roundHandler);

    const testHandler = service.getHandler(RoundEnum.CAPITAINE);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should init LOUP_GAROU round handler for LOUP_GAROU role', () => {
    service.initHandlers([PlayerRoleEnum.LOUP_GAROU]);

    expect(service['roundHandlers'].get(RoundEnum.LOUP_GAROU)).toBeInstanceOf(
      LoupGarouRoundHandler
    );
  });

  it('should not init LOUP_GAROU round handler when no LOUP_GAROU role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.LOUP_GAROU)).toEqual(false);
  });

  it('should return handler for LOUP_GAROU round', () => {
    const roundHandler = new LoupGarouRoundHandler();
    service['roundHandlers'].set(RoundEnum.LOUP_GAROU, roundHandler);

    const testHandler = service.getHandler(RoundEnum.LOUP_GAROU);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should init SORCIERE_HEALTH round handler for SORCIERE role', () => {
    service.initHandlers([PlayerRoleEnum.SORCIERE]);

    expect(
      service['roundHandlers'].get(RoundEnum.SORCIERE_HEALTH)
    ).toBeInstanceOf(SorciereHealthRoundHandler);
  });

  it('should not init SORCIERE_HEALTH round handler when no SORCIERE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_HEALTH)).toEqual(
      false
    );
  });

  it('should return handler for SORCIERE_HEALTH round', () => {
    const roundHandler = new SorciereHealthRoundHandler();
    service['roundHandlers'].set(RoundEnum.SORCIERE_HEALTH, roundHandler);

    const testHandler = service.getHandler(RoundEnum.SORCIERE_HEALTH);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should init SORCIERE_KILL round handler for SORCIERE role', () => {
    service.initHandlers([PlayerRoleEnum.SORCIERE]);

    expect(
      service['roundHandlers'].get(RoundEnum.SORCIERE_KILL)
    ).toBeInstanceOf(SorciereKillRoundHandler);
  });

  it('should not init SORCIERE_KILL round handler when no SORCIERE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_KILL)).toEqual(
      false
    );
  });

  it('should return handler for SORCIERE_KILL round', () => {
    const roundHandler = new SorciereKillRoundHandler();
    service['roundHandlers'].set(RoundEnum.SORCIERE_KILL, roundHandler);

    const testHandler = service.getHandler(RoundEnum.SORCIERE_KILL);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should init CUPIDON round handler for CUPIDON role', () => {
    service.initHandlers([PlayerRoleEnum.CUPIDON]);

    expect(service['roundHandlers'].get(RoundEnum.CUPIDON)).toBeInstanceOf(
      CupidonRoundHandler
    );
  });

  it('should not init CUPIDON round handler when no CUPIDON role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.CUPIDON)).toEqual(false);
  });

  it('should return handler for CUPIDON round', () => {
    const roundHandler = new CupidonRoundHandler();
    service['roundHandlers'].set(RoundEnum.CUPIDON, roundHandler);

    const testHandler = service.getHandler(RoundEnum.CUPIDON);

    expect(testHandler).toEqual(roundHandler);
  });
});
