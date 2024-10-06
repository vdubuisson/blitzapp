import { PlayerRoleEnum } from '@/enums/player-role.enum';
import { CardList, StoredCardList } from '@/models/card-list.model';
import { StorageService } from '@/services/storage/storage.service';
import { waitForAsync } from '@angular/core/testing';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import { of } from 'rxjs';
import { CardChoiceService } from './card-choice.service';

describe('CardChoiceService', () => {
  let service: CardChoiceService;

  const mockCards: CardList = {
    selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.SORCIERE]),
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  ngMocks.faster();

  beforeAll(() => MockBuilder(CardChoiceService).mock(StorageService));

  beforeAll(() => {
    MockInstance(
      StorageService,
      () =>
        ({
          get: (key: string) =>
            key === 'CardChoiceService_cards' ? of(mockCards) : of(null),
          set: jest.fn(),
        }) as Partial<StorageService>,
    );
  });

  beforeAll(() => {
    service = MockRender(CardChoiceService).point.componentInstance;
  });

  it('should init from storage', () => {
    expect(service['cards']()).toEqual(mockCards);
  });

  it('should return cards', waitForAsync(() => {
    expect(service.currentChosenCards()).toEqual(mockCards);
  }));

  it('should set cards', () => {
    const newMockCards: CardList = {
      selectedRoles: new Set<PlayerRoleEnum>([
        PlayerRoleEnum.CHASSEUR,
        PlayerRoleEnum.CUPIDON,
      ]),
      villageois: 2,
      loupGarou: 1,
      playersNumber: 5,
    };

    service.setCards(newMockCards);

    expect(service.currentChosenCards()).toEqual(newMockCards);
  });

  it('should store new cards', () => {
    const newMockCards: CardList = {
      selectedRoles: new Set<PlayerRoleEnum>([
        PlayerRoleEnum.CHASSEUR,
        PlayerRoleEnum.CUPIDON,
      ]),
      villageois: 2,
      loupGarou: 1,
      playersNumber: 5,
    };

    const expectedCards: StoredCardList = {
      selectedRoles: [PlayerRoleEnum.CHASSEUR, PlayerRoleEnum.CUPIDON],
      villageois: 2,
      loupGarou: 1,
      playersNumber: 5,
    };

    service.setCards(newMockCards);

    const storageService = ngMocks.get(StorageService);
    expect(storageService.set).toHaveBeenCalledWith(
      'CardChoiceService_cards',
      expectedCards,
    );
  });

  afterAll(MockReset);
});
