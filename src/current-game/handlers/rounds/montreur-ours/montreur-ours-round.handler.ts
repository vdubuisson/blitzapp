import { AnnouncementTypes } from '@/current-game/announcements/announcement-types';
import { PlayerRole } from '@/types/player-role';
import { PlayerStatus } from '@/types/player-status';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { DefaultRoundHandler } from '@/game-handlers/rounds/default/default-round.handler';
import { Announcer } from '@/current-game/announcements/announcer';
import { findLeftNeighbor, findRightNeighbor } from '@/utils/neighbor.utils';
import { isLoupGarou } from '@/utils/roles.utils';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export class MontreurOursRoundHandler extends DefaultRoundHandler {
  private readonly announcer = inject(Announcer);

  constructor() {
    super(Round.MONTREUR_OURS, false, true, RoundType.AUTO);
  }

  override handleAction(players: Player[], _: number[]): Observable<Player[]> {
    const montreurOursIndex = players.findIndex(
      (player) => player.role === PlayerRole.MONTREUR_OURS,
    );
    if (montreurOursIndex > -1) {
      const montreurOurs = players[montreurOursIndex];
      if (montreurOurs.statuses.has(PlayerStatus.INFECTED)) {
        this.announcer.announce(AnnouncementTypes.BEAR_GROWL);
        return of([...players]);
      }

      const leftPlayer = findLeftNeighbor(players, montreurOursIndex) as Player;
      if (isLoupGarou(leftPlayer)) {
        this.announcer.announce(AnnouncementTypes.BEAR_GROWL);
        return of([...players]);
      }

      const rightPlayer = findRightNeighbor(players, montreurOursIndex);
      if (isLoupGarou(rightPlayer)) {
        this.announcer.announce(AnnouncementTypes.BEAR_GROWL);
      }
    }
    return of([...players]);
  }
}
