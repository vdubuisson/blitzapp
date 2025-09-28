import { AnnouncementTypesEnum } from '@/current-game/announcements/announcement-types';
import { PlayerRoleEnum } from '@/types/player-role';
import { PlayerStatusEnum } from '@/types/player-status';
import { RoundTypeEnum } from '@/game-handlers/rounds/round-type';
import { RoundEnum } from '@/types/round';
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

      const leftPlayer = findLeftNeighbor(players, montreurOursIndex) as Player;
      if (isLoupGarou(leftPlayer)) {
        this.announcer.announce(AnnouncementTypesEnum.BEAR_GROWL);
        return of([...players]);
      }

      const rightPlayer = findRightNeighbor(players, montreurOursIndex);
      if (isLoupGarou(rightPlayer)) {
        this.announcer.announce(AnnouncementTypesEnum.BEAR_GROWL);
      }
    }
    return of([...players]);
  }
}
