import { MockService } from 'ng-mocks';
import { of } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { RoundEnum } from '../../enums/round.enum';
import {
  AmoureuxRoundHandler,
  CapitaineRoundHandler,
  CharmedRoundHandler,
  ChasseurRoundHandler,
  ChienLoupRoundHandler,
  CorbeauRoundHandler,
  CupidonRoundHandler,
  EnfantSauvageRoundHandler,
  FreresRoundHandler,
  GrandMechantLoupRoundHandler,
  JoueurFluteRoundHandler,
  LoupGarouRoundHandler,
  MontreurOursRoundHandler,
  RenardRoundHandler,
  SalvateurRoundHandler,
  SoeursRoundHandler,
  SorciereHealthRoundHandler,
  SorciereKillRoundHandler,
  VillageoisRoundHandler,
  VoyanteRoundHandler,
} from '../../round-handlers';
import { AnnouncementService } from '../announcement/announcement.service';
import { StorageService } from '../storage/storage.service';
import { RoundHandlersService } from './round-handlers.service';
import { ModalService } from '../modal/modal.service';
import { DefaultRoundHandler } from '../../round-handlers/default/default-round.handler';

describe('RoundHandlersService', () => {
  let service: RoundHandlersService;
  let announcementService: AnnouncementService;
  let modalService: ModalService;
  let storageService: StorageService;

  beforeEach(() => {
    announcementService = MockService(AnnouncementService);
    storageService = MockService(StorageService);

    jest.spyOn(storageService, 'get').mockReturnValue(of(null));

    service = new RoundHandlersService(
      announcementService,
      modalService,
      storageService,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init VILLAGEOIS round handler', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].get(RoundEnum.VILLAGEOIS)).toBeInstanceOf(
      VillageoisRoundHandler,
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
      CapitaineRoundHandler,
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
      LoupGarouRoundHandler,
    );
  });

  // it('should not init LOUP_GAROU round handler when no LOUP_GAROU role', () => {
  //   service.initHandlers([]);

  //   expect(service['roundHandlers'].has(RoundEnum.LOUP_GAROU)).toEqual(false);
  // });

  it('should return handler for LOUP_GAROU round', () => {
    const roundHandler = new LoupGarouRoundHandler();
    service['roundHandlers'].set(RoundEnum.LOUP_GAROU, roundHandler);

    const testHandler = service.getHandler(RoundEnum.LOUP_GAROU);

    expect(testHandler).toEqual(roundHandler);
  });

  // it('should remove handler LOUP_GAROU for LOUP_GAROU role', () => {
  //   service['roundHandlers'].set(
  //     RoundEnum.LOUP_GAROU,
  //     new LoupGarouRoundHandler()
  //   );

  //   service.removeHandlers([PlayerRoleEnum.LOUP_GAROU]);

  //   expect(service['roundHandlers'].has(RoundEnum.LOUP_GAROU)).toEqual(false);
  // });

  it('should init SORCIERE_HEALTH round handler for SORCIERE role', () => {
    service.initHandlers([PlayerRoleEnum.SORCIERE]);

    expect(
      service['roundHandlers'].get(RoundEnum.SORCIERE_HEALTH),
    ).toBeInstanceOf(SorciereHealthRoundHandler);
  });

  it('should not init SORCIERE_HEALTH round handler when no SORCIERE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_HEALTH)).toEqual(
      false,
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
      new SorciereHealthRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.SORCIERE]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_HEALTH)).toEqual(
      false,
    );
  });

  it('should init SORCIERE_KILL round handler for SORCIERE role', () => {
    service.initHandlers([PlayerRoleEnum.SORCIERE]);

    expect(
      service['roundHandlers'].get(RoundEnum.SORCIERE_KILL),
    ).toBeInstanceOf(SorciereKillRoundHandler);
  });

  it('should not init SORCIERE_KILL round handler when no SORCIERE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_KILL)).toEqual(
      false,
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
      new SorciereKillRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.SORCIERE]);

    expect(service['roundHandlers'].has(RoundEnum.SORCIERE_KILL)).toEqual(
      false,
    );
  });

  it('should init CUPIDON round handler for CUPIDON role', () => {
    service.initHandlers([PlayerRoleEnum.CUPIDON]);

    expect(service['roundHandlers'].get(RoundEnum.CUPIDON)).toBeInstanceOf(
      CupidonRoundHandler,
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
      AmoureuxRoundHandler,
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
      ChasseurRoundHandler,
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
      new ChasseurRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.CHASSEUR]);

    expect(service['roundHandlers'].has(RoundEnum.CHASSEUR)).toEqual(false);
  });

  it('should init VOYANTE round handler for VOYANTE role', () => {
    service.initHandlers([PlayerRoleEnum.VOYANTE]);

    expect(service['roundHandlers'].get(RoundEnum.VOYANTE)).toBeInstanceOf(
      VoyanteRoundHandler,
    );
  });

  it('should not init VOYANTE round handler when no VOYANTE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.VOYANTE)).toEqual(false);
  });

  it('should return handler for VOYANTE round', () => {
    const roundHandler = new VoyanteRoundHandler({ modalService });
    service['roundHandlers'].set(RoundEnum.VOYANTE, roundHandler);

    const testHandler = service.getHandler(RoundEnum.VOYANTE);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler VOYANTE for VOYANTE role', () => {
    service['roundHandlers'].set(
      RoundEnum.VOYANTE,
      new VoyanteRoundHandler({ modalService }),
    );

    service.removeHandlers([PlayerRoleEnum.VOYANTE]);

    expect(service['roundHandlers'].has(RoundEnum.VOYANTE)).toEqual(false);
  });

  it('should init JOUEUR_FLUTE round handler for JOUEUR_FLUTE role', () => {
    service.initHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].get(RoundEnum.JOUEUR_FLUTE)).toBeInstanceOf(
      JoueurFluteRoundHandler,
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
      new JoueurFluteRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].has(RoundEnum.JOUEUR_FLUTE)).toEqual(false);
  });

  it('should init CHARMED round handler for JOUEUR_FLUTE role', () => {
    service.initHandlers([PlayerRoleEnum.JOUEUR_FLUTE]);

    expect(service['roundHandlers'].get(RoundEnum.CHARMED)).toBeInstanceOf(
      CharmedRoundHandler,
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
      CorbeauRoundHandler,
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
      service['roundHandlers'].get(RoundEnum.ENFANT_SAUVAGE),
    ).toBeInstanceOf(EnfantSauvageRoundHandler);
  });

  it('should not init ENFANT_SAUVAGE round handler when no ENFANT_SAUVAGE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.ENFANT_SAUVAGE)).toEqual(
      false,
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
      new EnfantSauvageRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.ENFANT_SAUVAGE]);

    expect(service['roundHandlers'].has(RoundEnum.ENFANT_SAUVAGE)).toEqual(
      false,
    );
  });

  it('should init SALVATEUR round handler for SALVATEUR role', () => {
    service.initHandlers([PlayerRoleEnum.SALVATEUR]);

    expect(service['roundHandlers'].get(RoundEnum.SALVATEUR)).toBeInstanceOf(
      SalvateurRoundHandler,
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
      new SalvateurRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.SALVATEUR]);

    expect(service['roundHandlers'].has(RoundEnum.SALVATEUR)).toEqual(false);
  });

  it('should init LOUP_GAROU round handler for GRAND_MECHANT_LOUP role', () => {
    service.initHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(service['roundHandlers'].get(RoundEnum.LOUP_GAROU)).toBeInstanceOf(
      LoupGarouRoundHandler,
    );
  });

  it('should init GRAND_MECHANT_LOUP round handler for GRAND_MECHANT_LOUP role', () => {
    service.initHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(
      service['roundHandlers'].get(RoundEnum.GRAND_MECHANT_LOUP),
    ).toBeInstanceOf(GrandMechantLoupRoundHandler);
  });

  it('should not init GRAND_MECHANT_LOUP round handler when no GRAND_MECHANT_LOUP role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.GRAND_MECHANT_LOUP)).toEqual(
      false,
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
      new GrandMechantLoupRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.GRAND_MECHANT_LOUP]);

    expect(service['roundHandlers'].has(RoundEnum.GRAND_MECHANT_LOUP)).toEqual(
      false,
    );
  });

  it('should init MONTREUR_OURS round handler for MONTREUR_OURS role', () => {
    service.initHandlers([PlayerRoleEnum.MONTREUR_OURS]);

    expect(
      service['roundHandlers'].get(RoundEnum.MONTREUR_OURS),
    ).toBeInstanceOf(MontreurOursRoundHandler);
  });

  it('should not init MONTREUR_OURS round handler when no MONTREUR_OURS role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.MONTREUR_OURS)).toEqual(
      false,
    );
  });

  it('should return handler for MONTREUR_OURS round', () => {
    const roundHandler = new MontreurOursRoundHandler({ announcementService });
    service['roundHandlers'].set(RoundEnum.MONTREUR_OURS, roundHandler);

    const testHandler = service.getHandler(RoundEnum.MONTREUR_OURS);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler MONTREUR_OURS for MONTREUR_OURS role', () => {
    service['roundHandlers'].set(
      RoundEnum.MONTREUR_OURS,
      new MontreurOursRoundHandler({ announcementService }),
    );

    service.removeHandlers([PlayerRoleEnum.MONTREUR_OURS]);

    expect(service['roundHandlers'].has(RoundEnum.MONTREUR_OURS)).toEqual(
      false,
    );
  });

  it('should init RENARD round handler for RENARD role', () => {
    service.initHandlers([PlayerRoleEnum.RENARD]);

    expect(service['roundHandlers'].get(RoundEnum.RENARD)).toBeInstanceOf(
      RenardRoundHandler,
    );
  });

  it('should not init RENARD round handler when no RENARD role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.RENARD)).toEqual(false);
  });

  it('should return handler for RENARD round', () => {
    const roundHandler = new RenardRoundHandler({ announcementService });
    service['roundHandlers'].set(RoundEnum.RENARD, roundHandler);

    const testHandler = service.getHandler(RoundEnum.RENARD);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler RENARD for RENARD role', () => {
    service['roundHandlers'].set(
      RoundEnum.RENARD,
      new RenardRoundHandler({ announcementService }),
    );

    service.removeHandlers([PlayerRoleEnum.RENARD]);

    expect(service['roundHandlers'].has(RoundEnum.RENARD)).toEqual(false);
  });

  it('should init CHIEN_LOUP round handler for CHIEN_LOUP role', () => {
    service.initHandlers([PlayerRoleEnum.CHIEN_LOUP]);

    expect(service['roundHandlers'].get(RoundEnum.CHIEN_LOUP)).toBeInstanceOf(
      ChienLoupRoundHandler,
    );
  });

  it('should not init CHIEN_LOUP round handler when no CHIEN_LOUP role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.CHIEN_LOUP)).toEqual(false);
  });

  it('should return handler for CHIEN_LOUP round', () => {
    const roundHandler = new ChienLoupRoundHandler();
    service['roundHandlers'].set(RoundEnum.CHIEN_LOUP, roundHandler);

    const testHandler = service.getHandler(RoundEnum.CHIEN_LOUP);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler CHIEN_LOUP for CHIEN_LOUP role', () => {
    service['roundHandlers'].set(
      RoundEnum.CHIEN_LOUP,
      new ChienLoupRoundHandler(),
    );

    service.removeHandlers([PlayerRoleEnum.CHIEN_LOUP]);

    expect(service['roundHandlers'].has(RoundEnum.CHIEN_LOUP)).toEqual(false);
  });

  it('should init SOEURS round handler for SOEUR role', () => {
    service.initHandlers([PlayerRoleEnum.SOEUR]);

    expect(service['roundHandlers'].get(RoundEnum.SOEURS)).toBeInstanceOf(
      SoeursRoundHandler,
    );
  });

  it('should not init SOEURS round handler when no SOEUR role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.SOEURS)).toEqual(false);
  });

  it('should return handler for SOEURS round', () => {
    const roundHandler = new SoeursRoundHandler();
    service['roundHandlers'].set(RoundEnum.SOEURS, roundHandler);

    const testHandler = service.getHandler(RoundEnum.SOEURS);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler SOEURS for SOEUR role', () => {
    service['roundHandlers'].set(RoundEnum.SOEURS, new SoeursRoundHandler());

    service.removeHandlers([PlayerRoleEnum.SOEUR]);

    expect(service['roundHandlers'].has(RoundEnum.SOEURS)).toEqual(false);
  });

  it('should init FRERES round handler for FRERE role', () => {
    service.initHandlers([PlayerRoleEnum.FRERE]);

    expect(service['roundHandlers'].get(RoundEnum.FRERES)).toBeInstanceOf(
      FreresRoundHandler,
    );
  });

  it('should not init FRERES round handler when no FRERE role', () => {
    service.initHandlers([]);

    expect(service['roundHandlers'].has(RoundEnum.FRERES)).toEqual(false);
  });

  it('should return handler for FRERES round', () => {
    const roundHandler = new FreresRoundHandler();
    service['roundHandlers'].set(RoundEnum.FRERES, roundHandler);

    const testHandler = service.getHandler(RoundEnum.FRERES);

    expect(testHandler).toEqual(roundHandler);
  });

  it('should remove handler FRERES for FRERE role', () => {
    service['roundHandlers'].set(RoundEnum.FRERES, new FreresRoundHandler());

    service.removeHandlers([PlayerRoleEnum.FRERE]);

    expect(service['roundHandlers'].has(RoundEnum.FRERES)).toEqual(false);
  });

  it('should init handler as default', () => {
    service.initDefaultHandlers([PlayerRoleEnum.VOYANTE]);

    expect(service['roundHandlers'].get(RoundEnum.VOYANTE)).toBeInstanceOf(
      DefaultRoundHandler,
    );
  });
});
