import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { RoundTypeEnum } from '@/enums/round-type.enum';
import { RoundEnum } from '@/enums/round.enum';
import { Player } from '@/models/player.model';
import { ModalService } from '@/services/modal/modal.service';
import { inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VoyanteRoundHandler extends DefaultRoundHandler {
  private readonly modalService = inject(ModalService);

  constructor() {
    super(RoundEnum.VOYANTE, false, false, RoundTypeEnum.PLAYERS);
  }

  override handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    if (selectedPlayerIds.length === 0) {
      return of(players);
    }

    const selectedPlayerCard = (
      players.find((player) => player.id === selectedPlayerIds[0]) as Player
    ).card;
    return this.modalService
      .showPlayerCard(selectedPlayerCard)
      .pipe(map(() => [...players]));
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) => player.role !== PlayerRoleEnum.VOYANTE && !player.isDead,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }
}
