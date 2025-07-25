import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/configs/role-metadata.config';
import { Player } from '@/models/player.model';
import { RoundOrchestrationService } from '@/services/round-orchestration/round-orchestration.service';
import { inject } from '@angular/core';

export class AngeRoleHandler extends DefaultRoleHandler {
  private readonly roundOrchestrationService = inject(
    RoundOrchestrationService,
  );

  constructor() {
    super(PlayerRoleEnum.ANGE, ROLE_METADATA_CONFIG[PlayerRoleEnum.ANGE]!);
  }

  override prepareNewGame(players: Player[]): Player[] {
    this.roundOrchestrationService.setVillageoisFirst();
    return super.prepareNewGame(players);
  }
}
