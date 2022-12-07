import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class SorciereHealthRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    if (selectedPlayerIds.length > 0) {
      newPlayers
        .find((player) => player.id === selectedPlayerIds[0])
        ?.statuses.delete(PlayerStatusEnum.WOLF_TARGET);
      newPlayers
        .find((player) => player.role === PlayerRoleEnum.SORCIERE)
        ?.statuses.delete(PlayerStatusEnum.HEALTH_POTION);
    }
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.SORCIERE_HEALTH,
      selectablePlayers: this.canHeal(players)
        ? this.getHealablePlayers(players)
        : [],
      maxSelectable: 1,
      minSelectable: 0,
      isDuringDay: this.isDuringDay,
    };
  }

  private canHeal(players: Player[]): boolean {
    return (
      players
        .find((player) => player.role === PlayerRoleEnum.SORCIERE)
        ?.statuses.has(PlayerStatusEnum.HEALTH_POTION) ?? false
    );
  }

  private getHealablePlayers(players: Player[]): number[] {
    return players
      .filter((player) => player.statuses.has(PlayerStatusEnum.WOLF_TARGET))
      .map((player) => player.id);
  }
}
