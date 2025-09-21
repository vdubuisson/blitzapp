import { PlayerRole } from '@/types/player-role';
import { RoundType } from '@/game-handlers/rounds/round-type';
import { Round } from '@/types/round';
import { Player } from '@/shared/types/player';
import { ModalManager } from '@/layout/modal/modal-manager';
import { inject } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { DefaultRoundHandler } from '../default/default-round.handler';

export class VoyanteRoundHandler extends DefaultRoundHandler {
  private readonly modalManager = inject(ModalManager);

  constructor() {
    super(Round.VOYANTE, false, false, RoundType.PLAYERS);
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
    return this.modalManager
      .showPlayerCard(selectedPlayerCard)
      .pipe(map(() => [...players]));
  }

  protected override getSelectablePlayers(players: Player[]): Player[] {
    return players.filter(
      (player) => player.role !== PlayerRole.VOYANTE && !player.isDead,
    );
  }

  protected override getMaxSelectable(_: Player[]): number {
    return 1;
  }
}
