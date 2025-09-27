import { AnnouncementTypes } from '@/current-game/announcements/announcement-types';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { Announcer } from '@/current-game/announcements/announcer';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VillageoisRoundHandler extends DefaultRoundHandler {
  private readonly announcer = inject(Announcer);

  constructor() {
    super(Round.VILLAGEOIS, false, true, RoundType.PLAYERS);
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
      newPlayer.role === PlayerRole.IDIOT &&
      newPlayer.killedBy === undefined &&
      !newPlayer.statuses.has(PlayerStatus.INFECTED)
    ) {
      newPlayer.statuses.add(PlayerStatus.NO_VOTE);
      this.announcer.announce(AnnouncementTypes.IDIOT_PARDONED);
    } else {
      newPlayer.isDead = true;
    }
    newPlayer.killedBy = PlayerRole.VILLAGEOIS;

    return newPlayer;
  }

  private canVote(players: Player[]): boolean {
    return players.some(
      (player) => !player.isDead && !player.statuses.has(PlayerStatus.NO_VOTE),
    );
  }

  private handleEquality(players: Player[]): Player[] {
    const newPlayers = [...players];
    const boucIndex = newPlayers.findIndex(
      (player) => player.role === PlayerRole.BOUC,
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
