import { TrackByFunction } from '@angular/core';
import { Player } from '../models/player.model';

export const PLAYER_TRACK_BY: TrackByFunction<Player> = (
  _: number,
  player: Player,
) => player.id;
