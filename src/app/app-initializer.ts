import { inject } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { AfterDeathRoundQueueStore } from '../current-game/death/after-death-round-queue/after-death-round-queue-store';
import { AnnouncementsQueueStore } from '../current-game/announcements/announcements-queue/announcements-queue-store';
import { CardChoiceStore } from '../new-game/card-choice-store/card-choice-store';
import { DeathsToAnnounceStore } from '../current-game/death/deaths-to-announce/deaths-to-announce-store';
import { DefaultRoundHandlersStore } from '../current-game/handlers/rounds/default-round-handlers-store';
import { KnownDeathsStore } from '../current-game/death/known-deaths/known-deaths-store';
import { RoundHandlersStore } from '../current-game/handlers/rounds/round-handlers-store';
import { UniqueRoundsPassedStore } from '../current-game/orchestrator/unique-rounds-passed/unique-rounds-passed-store';
import { BeforeDeathRoundStore } from '../current-game/orchestrator/before-death-round/before-death-round-store';
import { VictoryHandlersStore } from '../current-game/handlers/victories/victory-handlers-store';
import { CurrentPlayersStore } from '../current-game/current-players-store/current-players-store';
import { CurrentRoundConfigStore } from '../current-game/orchestrator/current-round-config/current-round-config-store';
import { DayCountStore } from '../current-game/orchestrator/day-count/day-count-store';
import { NeedCleanAfterBoucStore } from '../current-game/orchestrator/need-clean-after-bouc/need-clean-after-bouc-store';

export function appInitializer(): Observable<void[]> {
  const stores = [
    inject(AfterDeathRoundQueueStore),
    inject(AnnouncementsQueueStore),
    inject(BeforeDeathRoundStore),
    inject(CardChoiceStore),
    inject(CurrentPlayersStore),
    inject(CurrentRoundConfigStore),
    inject(DayCountStore),
    inject(DeathsToAnnounceStore),
    inject(DefaultRoundHandlersStore),
    inject(KnownDeathsStore),
    inject(NeedCleanAfterBoucStore),
    inject(RoundHandlersStore),
    inject(UniqueRoundsPassedStore),
    inject(VictoryHandlersStore),
  ];

  return forkJoin(stores.map((store) => store.initialized$));
}
