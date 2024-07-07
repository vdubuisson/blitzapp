import { RoundEnum } from '../../enums/round.enum';
import { RoundHandler } from '../round-handler.interface';
import { RoundTypeEnum } from '../../enums/round-type.enum';
import { ModalService } from '../../services/modal/modal.service';
import { Player } from '../../models/player.model';
import { Round } from '../../models/round.model';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { map, Observable } from 'rxjs';
import { RoundHandlerParameters } from '../round-handler-parameters.interface';

export class VoyanteRoundHandler implements RoundHandler {
  readonly isOnlyOnce = false;
  readonly isDuringDay = false;
  readonly type = RoundTypeEnum.PLAYERS;

  private modalService: ModalService;

  constructor({ modalService }: RoundHandlerParameters) {
    this.modalService = modalService as ModalService;
  }

  handleAction(
    players: Player[],
    selectedPlayerIds: number[],
  ): Observable<Player[]> {
    const selectedPlayerCard = (
      players.find((player) => player.id === selectedPlayerIds[0]) as Player
    ).card;
    return this.modalService
      .showPlayerCard(selectedPlayerCard)
      .pipe(map(() => [...players]));
  }

  getRoundConfig(players: Player[]): Round {
    return {
      role: RoundEnum.VOYANTE,
      selectablePlayers: players
        .filter((player) => player.role !== PlayerRoleEnum.VOYANTE)
        .map((player) => player.id),
      maxSelectable: 1,
      minSelectable: 1,
      isDuringDay: this.isDuringDay,
      type: this.type,
    };
  }
}
