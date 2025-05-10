import { AnnouncementEnum } from '@/enums/announcement.enum';
import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { PlayerStatusEnum } from '@/enums/player-status.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { DefaultRoundHandler } from '@/round-handlers/default/default-round.handler';
import { AnnouncementService } from '@/services/announcement/announcement.service';
import { findLeftNeighbor, findRightNeighbor } from '@/utils/neighbor.utils';
import { isLoupGarou } from '@/utils/roles.utils';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

export class MontreurOursRoundHandler extends DefaultRoundHandler {
  private readonly announcementService = inject(AnnouncementService);

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
        this.announcementService.announce(AnnouncementEnum.BEAR_GROWL);
        return of([...players]);
      }

      const leftPlayer = findLeftNeighbor(players, montreurOursIndex) as Player;
      if (isLoupGarou(leftPlayer)) {
        this.announcementService.announce(AnnouncementEnum.BEAR_GROWL);
        return of([...players]);
      }

      const rightPlayer = findRightNeighbor(players, montreurOursIndex);
      if (isLoupGarou(rightPlayer)) {
        this.announcementService.announce(AnnouncementEnum.BEAR_GROWL);
      }
    }
    return of([...players]);
  }
}
