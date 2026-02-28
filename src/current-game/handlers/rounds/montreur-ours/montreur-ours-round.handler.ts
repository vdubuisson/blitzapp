import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { Announcer } from '@/current-game/announcements/announcer';
import { NeighborFinder } from '@/current-game/players/neighbor-finder';
import { PlayersRoleUtility } from '@/current-game/players/players-role-utility';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundEnum } from '@/types/round';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export class MontreurOursRoundHandler extends DefaultRoundHandler {
  private readonly announcer = inject(Announcer);
  private readonly neighborFinder = inject(NeighborFinder);
  private readonly playersRoleUtility = inject(PlayersRoleUtility);

  constructor() {
    super(RoundEnum.MONTREUR_OURS, false, true, RoundTypeEnum.AUTO);
  }

  override handleAction(players: Player[], _: number[]): Observable<Player[]> {
    const montreurOursIndex = players.findIndex(
      (player) => player.role === PlayerRoleEnum.MONTREUR_OURS,
    );
    if (montreurOursIndex > -1) {
      const montreurOurs = players[montreurOursIndex];
      if (montreurOurs.statuses.has(PlayerStatusEnum.INFECTED)) {
        this.announcer.announce(AnnouncementTypesEnum.BEAR_GROWL);
        return of([...players]);
      }

      const leftPlayer = this.neighborFinder.findLeftNeighbor(
        players,
        montreurOursIndex,
      ) as Player;
      if (this.playersRoleUtility.isLoupGarou(leftPlayer)) {
        this.announcer.announce(AnnouncementTypesEnum.BEAR_GROWL);
        return of([...players]);
      }

      const rightPlayer = this.neighborFinder.findRightNeighbor(
        players,
        montreurOursIndex,
      ) as Player;
      if (this.playersRoleUtility.isLoupGarou(rightPlayer)) {
        this.announcer.announce(AnnouncementTypesEnum.BEAR_GROWL);
      }
    }
    return of([...players]);
  }
}
