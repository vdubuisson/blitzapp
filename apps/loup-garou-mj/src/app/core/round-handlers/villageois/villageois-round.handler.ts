import { RoundTypeEnum } from '../../enums/round-type.enum';
import { RoundEnum } from '../../enums/round.enum';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { RoundHandler } from '../round-handler.interface';
import { Observable, of } from 'rxjs';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { PlayerStatusEnum } from '../../enums/player-status.enum';
import { RoundHandlerParameters } from '../round-handler-parameters.interface';
import { AnnouncementService } from '../../services/announcement/announcement.service';
import { AnnouncementEnum } from '../../enums/announcement.enum';

export class VillageoisRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = true;
  readonly type = RoundTypeEnum.PLAYERS;

  private announcementService: AnnouncementService;

  constructor({ announcementService }: RoundHandlerParameters) {
    this.announcementService = announcementService as AnnouncementService;
  }

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const newPlayers = [...players];
    const selectedPlayer = newPlayers.find(
      (player) => player.id === selectedPlayerIds[0],
    ) as Player;

    // TODO handle if INFECTED
    if (
      selectedPlayer.role === PlayerRoleEnum.IDIOT &&
      selectedPlayer.killedBy === undefined
    ) {
      selectedPlayer.statuses.add(PlayerStatusEnum.NO_VOTE);
      this.announcementService.announce(AnnouncementEnum.IDIOT_PARDONED);
    } else {
      selectedPlayer.isDead = true;
    }
    selectedPlayer.killedBy = PlayerRoleEnum.VILLAGEOIS;

    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: this.getKillablePlayers(players),
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }

  private getKillablePlayers(players: Player[]): number[] {
    return players
      .filter((player) => !player.isDead)
      .map((player) => player.id);
  }
}
