import { TrackByFunction } from '@angular/core';
import { PlayerStatusEnum } from '../enums/player-status.enum';

export const STATUS_TRACK_BY: TrackByFunction<PlayerStatusEnum> = (
  _: number,
  status: PlayerStatusEnum,
) => status;
