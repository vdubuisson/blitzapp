import { MockService } from 'ng-mocks';
import { when } from 'jest-when';
import { CardChoiceService } from './card-choice.service';
import { StorageService } from '../storage/storage.service';
import { PlayerRoleEnum } from '../../enums/player-role.enum';
import { of } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';
import { CardList, StoredCardList } from '../../models/card-list.model';

describe('CardChoiceService', () => {
  let service: CardChoiceService;

  let storageService: StorageService;
  const mockCards: CardList = {
    selectedRoles: new Set<PlayerRoleEnum>([PlayerRoleEnum.SORCIERE]),
    villageois: 4,
    loupGarou: 1,
    playersNumber: 6,
  };

  beforeEach(() => {
    storageService = MockService(StorageService);

    const storageGetSpy = jest.spyOn(storageService, 'get');
    when(storageGetSpy)
      .calledWith('CardChoiceService_cards')
      .mockReturnValue(of(mockCards));

    service = new CardChoiceService(storageService);
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
    jest.spyOn(storageService, 'set');

    service.setCards(newMockCards);

    expect(storageService.set).toHaveBeenCalledWith(
      'CardChoiceService_cards',
      expectedCards,
    );
  });
});
