import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { Player } from '@/models/player.model';
import { VictoryHandler } from '@/victory-handlers/victory.handler';

export class JoueurFluteVictoryHandler implements VictoryHandler {
  isVictorious(players: Player[]): boolean {
    const isJoueurFluteAlive = !players.find(
      (player) => player.role === PlayerRoleEnum.JOUEUR_FLUTE,
    )?.isDead;
    const areAlivePlayersCharmed = players
      .filter(
        (player) =>
          !player.isDead && player.role !== PlayerRoleEnum.JOUEUR_FLUTE,
      )
      .every((player) => player.statuses.has(PlayerStatusEnum.CHARMED));
    return isJoueurFluteAlive && areAlivePlayersCharmed;
  }
}
