import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { PlayerRole, PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Announcer } from '@/current-game/announcements/announcer';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VillageoisRoundHandler extends DefaultRoundHandler {
  private readonly announcer = inject(Announcer);

  constructor() {
    super(RoundEnum.VILLAGEOIS, false, true, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
    _?: PlayerRole,
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
    if (
      newPlayer.role === PlayerRoleEnum.IDIOT &&
      newPlayer.killedBy === undefined &&
      !newPlayer.statuses.has(PlayerStatusEnum.INFECTED)
    ) {
      newPlayer.statuses.add(PlayerStatusEnum.NO_VOTE);
      this.announcer.announce(AnnouncementTypesEnum.IDIOT_PARDONED);
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
