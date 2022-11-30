import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';

export class SorciereKillRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;

  handleAction(players: Player[], selectedPlayerIds: number[]): Player[] {
    const newPlayers = [...players];
    (
      newPlayers.find((player) => player.id === selectedPlayerIds[0]) as Player
    ).isDead = true;
    newPlayers
      .find((player) => player.role === PlayerRoleEnum.SORCIERE)
      ?.statuses.delete(PlayerStatusEnum.DEATH_POTION);
    return newPlayers;
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.SORCIERE_KILL,
      selectablePlayers: this.canKill(players)
        ? this.getKillablePlayers(players)
        : [],
      maxSelectable: 1,
      minSelectable: 0,
    };
  }

  private canKill(players: Player[]): boolean {
    return (
      players
        .find((player) => player.role === PlayerRoleEnum.SORCIERE)
        ?.statuses.has(PlayerStatusEnum.DEATH_POTION) ?? false
    );
  }

  private getKillablePlayers(players: Player[]): number[] {
    return players
      .filter(
        (player) => player.role !== PlayerRoleEnum.SORCIERE && !player.isDead
      )
      .map((player) => player.id);
  }
}
