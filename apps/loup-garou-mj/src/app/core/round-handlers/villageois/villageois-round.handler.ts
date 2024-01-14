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
    _?: PlayerRoleEnum,
    isEquality?: boolean,
  ): Observable<Player[]> {
    const newPlayers = [...players];

    if (isEquality) {
      this.handleEquality(players);
    } else if (selectedPlayerIds.length > 0) {
      this.handleSelectedPlayer(players, selectedPlayerIds);
    }

    return of(newPlayers);
  }

  getRoundConfig(players: Player[]): Round {
    const canVote = players.some(
      (player) =>
        !player.isDead && !player.statuses.has(PlayerStatusEnum.NO_VOTE),
    );
    return {
      role: RoundEnum.VILLAGEOIS,
      selectablePlayers: canVote ? this.getKillablePlayers(players) : [],
      maxSelectable: 1,
      minSelectable: canVote ? 1 : 0,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }

  private getKillablePlayers(players: Player[]): number[] {
    return players
      .filter((player) => !player.isDead)
      .map((player) => player.id);
  }

  private handleSelectedPlayer(players: Player[], selectedPlayerIds: number[]) {
    const selectedPlayer = players.find(
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
  }

  private handleEquality(players: Player[]): void {
    const boucPlayer = players.find(
      (player) => player.role === PlayerRoleEnum.BOUC,
    );
    if (boucPlayer) {
      boucPlayer.isDead = true;
      boucPlayer.killedBy = undefined;
    }
  }
}
