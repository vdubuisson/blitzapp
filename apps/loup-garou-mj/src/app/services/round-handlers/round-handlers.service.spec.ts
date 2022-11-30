import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import { LoupGarouRoundHandler } from '../../handlers/loup-garou/loup-garou-round.handler';
import { SorciereHealthRoundHandler } from '../../handlers/sorciere-health/sorciere-health-round.handler';
import { RoundHandlersService } from './round-handlers.service';

describe('RoundHandlersService', () => {
  let service: RoundHandlersService;

  beforeEach(() => {
    service = new RoundHandlersService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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
});
