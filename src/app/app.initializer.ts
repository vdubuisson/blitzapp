import { inject } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { AfterDeathRoundQueueStore } from './stores/after-death-round-queue/after-death-round-queue.store';
import { AnnouncementsQueueStore } from './stores/announcements-queue/announcements-queue.store';
import { CardChoiceStore } from './stores/card-choice/card-choice.store';
import { DeathsToAnnounceStore } from './stores/deaths-to-announce/deaths-to-announce.store';
import { DefaultRoundHandlersStore } from './stores/default-round-handlers/default-round-handlers.store';
import { KnownDeathsStore } from './stores/known-deaths/known-deaths.store';
import { RoundHandlersStore } from './stores/round-handlers/round-handlers.store';
import { UniqueRoundsPassedStore } from './stores/unique-rounds-passed/unique-rounds-passed.store';
import { BeforeDeathRoundStore } from './stores/before-death-round/before-death-round.store';
import { VictoryHandlersStore } from './stores/victory-handlers/victory-handlers.store';
import { CurrentPlayersStore } from './stores/current-players/current-players.store';
import { CurrentRoundStore } from './stores/current-round/current-round.store';
import { DayCountStore } from './stores/day-count/day-count.store';
import { NeedCleanAfterBoucStore } from './stores/need-clean-after-bouc/need-clean-after-bouc.store';

export function appInitializer(): Observable<void[]> {
  const stores = [
    inject(AfterDeathRoundQueueStore),
    inject(AnnouncementsQueueStore),
    inject(BeforeDeathRoundStore),
    inject(CardChoiceStore),
    inject(CurrentPlayersStore),
    inject(CurrentRoundStore),
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
