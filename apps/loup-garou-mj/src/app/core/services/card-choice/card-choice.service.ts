import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { CardList, StoredCardList } from '../../models/card-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardChoiceService {
  private cards = new BehaviorSubject<CardList | undefined>(undefined);

  private readonly CARDS_KEY = 'CardChoiceService_cards';

  constructor(private storageService: StorageService) {
    this.initFromStorage();
  }

  getCurrentChosenCards(): Observable<CardList> {
    return this.cards
      .asObservable()
      .pipe(first((cards) => cards !== undefined)) as Observable<CardList>;
  }

  setCards(cards: CardList): void {
    this.cards.next(cards);
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
          this.cards.next(cardList);
        } else {
          this.cards.next({
            villageois: 0,
            loupGarou: 0,
            playersNumber: 0,
            selectedRoles: new Set(),
          });
        }
      });
  }
}
