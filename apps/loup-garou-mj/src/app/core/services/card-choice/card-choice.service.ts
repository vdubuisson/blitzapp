import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { CardList, StoredCardList } from '../../models/card-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardChoiceService {
  private cards: WritableSignal<CardList> = signal({
    villageois: 0,
    loupGarou: 0,
    playersNumber: 0,
    selectedRoles: new Set(),
  });

  get currentChosenCards(): Signal<CardList> {
    return this.cards.asReadonly();
  }

  private readonly CARDS_KEY = 'CardChoiceService_cards';

  constructor(private storageService: StorageService) {
    this.initFromStorage();
  }

  setCards(cards: CardList): void {
    this.cards.set(cards);
    const storedCardList: StoredCardList = {
      ...cards,
      selectedRoles: Array.from(cards.selectedRoles),
    };
    this.storageService.set(this.CARDS_KEY, storedCardList);
  }

  private initFromStorage(): void {
    this.storageService
      .get<StoredCardList>(this.CARDS_KEY)
      .subscribe((storedCards) => {
        if (storedCards) {
          const cardList: CardList = {
            ...storedCards,
            selectedRoles: new Set(storedCards.selectedRoles),
          };
          this.cards.set(cardList);
        }
      });
  }
}
