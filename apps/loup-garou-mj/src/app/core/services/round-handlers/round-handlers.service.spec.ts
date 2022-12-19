import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import {
  VillageoisRoundHandler,
  CapitaineRoundHandler,
  LoupGarouRoundHandler,
  SorciereHealthRoundHandler,
  SorciereKillRoundHandler,
  CupidonRoundHandler,
  ChasseurRoundHandler,
  VoyanteRoundHandler,
  AmoureuxRoundHandler,
  JoueurFluteRoundHandler,
  CharmedRoundHandler,
  CorbeauRoundHandler,
  EnfantSauvageRoundHandler,
  SalvateurRoundHandler,
  GrandMechantLoupRoundHandler,
} from '../../round-handlers';
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

  it('should remove handler LOUP_GAROU for LOUP_GAROU role', () => {
    service['roundHandlers'].set(
      RoundEnum.LOUP_GAROU,
      new LoupGarouRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.LOUP_GAROU]);

    expect(service['roundHandlers'].has(RoundEnum.LOUP_GAROU)).toEqual(false);
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

  it('should remove handler SORCIERE_HEALTH for SORCIERE role', () => {
    service['roundHandlers'].set(
      RoundEnum.SORCIERE_HEALTH,
      new SorciereHealthRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.SORCIERE]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_HEALTH)).toEqual(
      false
    );
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

  it('should remove handler SORCIERE_KILL for SORCIERE role', () => {
    service['roundHandlers'].set(
      RoundEnum.SORCIERE_KILL,
      new SorciereKillRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.SORCIERE]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_KILL)).toEqual(
      false
    );
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

  it('should remove handler CUPIDON for CUPIDON role', () => {
    service['roundHandlers'].set(RoundEnum.CUPIDON, new CupidonRoundHandler());

    service.removeHandlers([PlayerRoleEnum.CUPIDON]);

    expect(service['roundHandlers'].has(RoundEnum.CUPIDON)).toEqual(false);
  });

  it('should init AMOUREUX round handler for CUPIDON role', () => {
    service.initHandlers([PlayerRoleEnum.CUPIDON]);

    expect(service['roundHandlers'].get(RoundEnum.AMOUREUX)).toBeInstanceOf(
      AmoureuxRoundHandler
    );
  });

  it('should not init AMOUREUX round handler when no CUPIDON role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.AMOUREUX)).toEqual(false);
  });

  it('should return handler for AMOUREUX round', () => {
    const roundHandler = new AmoureuxRoundHandler();
    service['roundHandlers'].set(RoundEnum.AMOUREUX, roundHandler);

    const testHandler = service.getHandler(RoundEnum.AMOUREUX);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should init CHASSEUR round handler for CHASSEUR role', () => {
    service.initHandlers([PlayerRoleEnum.CHASSEUR]);

    expect(service['roundHandlers'].get(RoundEnum.CHASSEUR)).toBeInstanceOf(
      ChasseurRoundHandler
    );
  });

  it('should not init CHASSEUR round handler when no CHASSEUR role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.CHASSEUR)).toEqual(false);
  });

  it('should return handler for CHASSEUR round', () => {
    const roundHandler = new ChasseurRoundHandler();
    service['roundHandlers'].set(RoundEnum.CHASSEUR, roundHandler);

    const testHandler = service.getHandler(RoundEnum.CHASSEUR);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler CHASSEUR for CHASSEUR role', () => {
    service['roundHandlers'].set(
      RoundEnum.CHASSEUR,
      new ChasseurRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.CHASSEUR]);

    expect(service['roundHandlers'].has(RoundEnum.CHASSEUR)).toEqual(false);
  });

  it('should init VOYANTE round handler for VOYANTE role', () => {
    service.initHandlers([PlayerRoleEnum.VOYANTE]);

    expect(service['roundHandlers'].get(RoundEnum.VOYANTE)).toBeInstanceOf(
      VoyanteRoundHandler
    );
  });

  it('should not init VOYANTE round handler when no VOYANTE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.VOYANTE)).toEqual(false);
  });

  it('should return handler for VOYANTE round', () => {
    const roundHandler = new VoyanteRoundHandler();
    service['roundHandlers'].set(RoundEnum.VOYANTE, roundHandler);

    const testHandler = service.getHandler(RoundEnum.VOYANTE);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler VOYANTE for VOYANTE role', () => {
    service['roundHandlers'].set(RoundEnum.VOYANTE, new VoyanteRoundHandler());

    service.removeHandlers([PlayerRoleEnum.VOYANTE]);

    expect(service['roundHandlers'].has(RoundEnum.VOYANTE)).toEqual(false);
  });

  it('should init JOUEUR_FLUTE round handler for JOUEUR_FLUTE role', () => {
    service.initHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].get(RoundEnum.JOUEUR_FLUTE)).toBeInstanceOf(
      JoueurFluteRoundHandler
    );
  });

  it('should not init JOUEUR_FLUTE round handler when no JOUEUR_FLUTE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.JOUEUR_FLUTE)).toEqual(false);
  });

  it('should return handler for JOUEUR_FLUTE round', () => {
    const roundHandler = new JoueurFluteRoundHandler();
    service['roundHandlers'].set(RoundEnum.JOUEUR_FLUTE, roundHandler);

    const testHandler = service.getHandler(RoundEnum.JOUEUR_FLUTE);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler JOUEUR_FLUTE for JOUEUR_FLUTE role', () => {
    service['roundHandlers'].set(
      RoundEnum.JOUEUR_FLUTE,
      new JoueurFluteRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].has(RoundEnum.JOUEUR_FLUTE)).toEqual(false);
  });

  it('should init CHARMED round handler for JOUEUR_FLUTE role', () => {
    service.initHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].get(RoundEnum.CHARMED)).toBeInstanceOf(
      CharmedRoundHandler
    );
  });

  it('should not init CHARMED round handler when no JOUEUR_FLUTE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.CHARMED)).toEqual(false);
  });

  it('should return handler for CHARMED round', () => {
    const roundHandler = new CharmedRoundHandler();
    service['roundHandlers'].set(RoundEnum.CHARMED, roundHandler);

    const testHandler = service.getHandler(RoundEnum.CHARMED);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler CHARMED for JOUEUR_FLUTE role', () => {
    service['roundHandlers'].set(RoundEnum.CHARMED, new CharmedRoundHandler());

    service.removeHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].has(RoundEnum.CHARMED)).toEqual(false);
  });

  it('should init CORBEAU round handler for CORBEAU role', () => {
    service.initHandlers([PlayerRoleEnum.CORBEAU]);

    expect(service['roundHandlers'].get(RoundEnum.CORBEAU)).toBeInstanceOf(
      CorbeauRoundHandler
    );
  });

  it('should not init CORBEAU round handler when no CORBEAU role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.CORBEAU)).toEqual(false);
  });

  it('should return handler for CORBEAU round', () => {
    const roundHandler = new CorbeauRoundHandler();
    service['roundHandlers'].set(RoundEnum.CORBEAU, roundHandler);

    const testHandler = service.getHandler(RoundEnum.CORBEAU);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler CORBEAU for CORBEAU role', () => {
    service['roundHandlers'].set(RoundEnum.CORBEAU, new CorbeauRoundHandler());

    service.removeHandlers([PlayerRoleEnum.CORBEAU]);

    expect(service['roundHandlers'].has(RoundEnum.CORBEAU)).toEqual(false);
  });

  it('should init ENFANT_SAUVAGE round handler for ENFANT_SAUVAGE role', () => {
    service.initHandlers([PlayerRoleEnum.ENFANT_SAUVAGE]);

    expect(
      service['roundHandlers'].get(RoundEnum.ENFANT_SAUVAGE)
    ).toBeInstanceOf(EnfantSauvageRoundHandler);
  });

  it('should not init ENFANT_SAUVAGE round handler when no ENFANT_SAUVAGE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.ENFANT_SAUVAGE)).toEqual(
      false
    );
  });

  it('should return handler for ENFANT_SAUVAGE round', () => {
    const roundHandler = new EnfantSauvageRoundHandler();
    service['roundHandlers'].set(RoundEnum.ENFANT_SAUVAGE, roundHandler);

    const testHandler = service.getHandler(RoundEnum.ENFANT_SAUVAGE);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler ENFANT_SAUVAGE for ENFANT_SAUVAGE role', () => {
    service['roundHandlers'].set(
      RoundEnum.ENFANT_SAUVAGE,
      new EnfantSauvageRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.ENFANT_SAUVAGE]);

    expect(service['roundHandlers'].has(RoundEnum.ENFANT_SAUVAGE)).toEqual(
      false
    );
  });

  it('should init SALVATEUR round handler for SALVATEUR role', () => {
    service.initHandlers([PlayerRoleEnum.SALVATEUR]);

    expect(service['roundHandlers'].get(RoundEnum.SALVATEUR)).toBeInstanceOf(
      SalvateurRoundHandler
    );
  });

  it('should not init SALVATEUR round handler when no SALVATEUR role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.SALVATEUR)).toEqual(false);
  });

  it('should return handler for SALVATEUR round', () => {
    const roundHandler = new SalvateurRoundHandler();
    service['roundHandlers'].set(RoundEnum.SALVATEUR, roundHandler);

    const testHandler = service.getHandler(RoundEnum.SALVATEUR);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler SALVATEUR for SALVATEUR role', () => {
    service['roundHandlers'].set(
      RoundEnum.SALVATEUR,
      new SalvateurRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.SALVATEUR]);

    expect(service['roundHandlers'].has(RoundEnum.SALVATEUR)).toEqual(false);
  });

  it('should init GRAND_MECHANT_LOUP round handler for GRAND_MECHANT_LOUP role', () => {
    service.initHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(
      service['roundHandlers'].get(RoundEnum.GRAND_MECHANT_LOUP)
    ).toBeInstanceOf(GrandMechantLoupRoundHandler);
  });

  it('should not init GRAND_MECHANT_LOUP round handler when no GRAND_MECHANT_LOUP role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.GRAND_MECHANT_LOUP)).toEqual(
      false
    );
  });

  it('should return handler for GRAND_MECHANT_LOUP round', () => {
    const roundHandler = new GrandMechantLoupRoundHandler();
    service['roundHandlers'].set(RoundEnum.GRAND_MECHANT_LOUP, roundHandler);

    const testHandler = service.getHandler(RoundEnum.GRAND_MECHANT_LOUP);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler GRAND_MECHANT_LOUP for GRAND_MECHANT_LOUP role', () => {
    service['roundHandlers'].set(
      RoundEnum.GRAND_MECHANT_LOUP,
      new GrandMechantLoupRoundHandler()
    );

    service.removeHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(service['roundHandlers'].has(RoundEnum.GRAND_MECHANT_LOUP)).toEqual(
      false
    );
  });
});
