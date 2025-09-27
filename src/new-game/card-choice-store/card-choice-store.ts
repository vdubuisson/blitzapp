import { CardList, StoredCardList } from '@/shared/types/card-list';
import { Injectable } from '@angular/core';
import { AbstractStore } from '../../core/storage/abstract-store';

@Injectable({
  providedIn: 'root',
})
export class CardChoiceStore extends AbstractStore<CardList, StoredCardList> {
  constructor() {
    super('store.cardChoice', {
      villageois: 0,
      loupGarou: 0,
      playersNumber: 0,
      selectedRoles: new Set(),
    });
  }

  protected override convertStateToStored(state: CardList): StoredCardList {
    return {
      ...state,
      selectedRoles: Array.from(state.selectedRoles),
    };
  }

  protected override convertStoredToState(state: StoredCardList): CardList {
    return {
      ...state,
      selectedRoles: new Set(state.selectedRoles),
    };
  }
}
