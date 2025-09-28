import { PlayerRoleEnum } from '@/types/player-role';
import { DefaultRoleHandler } from '../default/default.role-handler';
import { ROLE_METADATA_CONFIG } from '@/config/role-metadata';
import { Player } from '@/shared/types/player';
import { inject } from '@angular/core';
import { RoundOrchestrator } from '@/current-game/orchestrator/round-orchestrator';

export class AngeRoleHandler extends DefaultRoleHandler {
  private readonly roundOrchestrator = inject(RoundOrchestrator);

  constructor() {
    super(PlayerRoleEnum.ANGE, ROLE_METADATA_CONFIG[PlayerRoleEnum.ANGE]!);
  }

  override prepareNewGame(players: Player[]): Player[] {
    this.roundOrchestrator.setVillageoisFirst();
    return super.prepareNewGame(players);
  }
}
