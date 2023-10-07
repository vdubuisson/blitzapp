import { TrackByFunction } from '@angular/core';
import { PlayerRoleEnum } from '../enums/player-role.enum';

export const ROLE_TRACK_BY: TrackByFunction<PlayerRoleEnum> = (
  _: number,
  role: PlayerRoleEnum,
) => role;
