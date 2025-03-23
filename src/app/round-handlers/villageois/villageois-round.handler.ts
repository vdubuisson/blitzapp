import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { RoundHandlerParameters } from '@/round-handlers/round-handler-parameters.type';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VillageoisRoundHandler extends DefaultRoundHandler {
  private announcementService: AnnouncementService;

  constructor({ announcementService }: RoundHandlerParameters) {
    super(RoundEnum.VILLAGEOIS, false, true, RoundTypeEnum.PLAYERS);
    this.announcementService = announcementService as AnnouncementService;
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
    _?: PlayerRoleEnum,
    isEquality?: boolean,
  ): Observable<Player[]> {
    if (isEquality) {
      const newPlayers = this.handleEquality(players);
      return of(newPlayers);
    }

    return super.handleAction(players, selectedPlayerIds);
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return this.canVote(players)
      ? players.filter((player) => !player.isDead)
      : [];
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }

  protected override getMinSelectable(players: Player[]): number {
    return this.canVote(players) ? 1 : 0;
  }

  protected override affectSelectedPlayer(player: Player): Player {
    const newPlayer: Player = {
      ...player,
      statuses: new Set(player.statuses),
    };
    // TODO handle if INFECTED
    if (
      newPlayer.role === PlayerRoleEnum.IDIOT &&
      newPlayer.killedBy === undefined
    ) {
      newPlayer.statuses.add(PlayerStatusEnum.NO_VOTE);
      this.announcementService.announce(AnnouncementEnum.IDIOT_PARDONED);
    } else {
      newPlayer.isDead = true;
    }
    newPlayer.killedBy = PlayerRoleEnum.VILLAGEOIS;

    return newPlayer;
  }

  private canVote(players: Player[]): boolean {
    return players.some(
      (player) =>
        !player.isDead && !player.statuses.has(PlayerStatusEnum.NO_VOTE),
    );
  }

  private handleEquality(players: Player[]): Player[] {
    const newPlayers = [...players];
    const boucIndex = newPlayers.findIndex(
      (player) => player.role === PlayerRoleEnum.BOUC,
    );
    if (boucIndex > -1) {
      newPlayers[boucIndex] = {
        ...newPlayers[boucIndex],
        isDead: true,
        killedBy: undefined,
      };
    }
    return newPlayers;
  }
}
