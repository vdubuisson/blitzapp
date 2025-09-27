import { NewPlayer } from '@/new-game/players/new-player/new-player';
import { PlayerRole } from '@/types/player-role';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, output, signal, WritableSignal } from '@angular/core';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  MockReset,
  ngMocks,
} from 'ng-mocks';
import NewGamePlayerListPage from './new-game-players-page';

@Component({
  selector: 'lgmj-new-player',
  standalone: true,
  template: '',
})
class NewPlayerStubComponent {
  readonly newPlayer = output<string>();
}

describe('NewGamePage', () => {
  let component: NewGamePlayerListPage;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockCardList: WritableSignal<CardList>;

  ngMocks.faster();

  beforeAll(async () =>
    MockBuilder(NewGamePlayerListPage)
      .mock(NewGameCreator)
      .mock(CardChoiceStore)
      .replace(NewPlayer, NewPlayerStubComponent),
  );

  beforeAll(() => {
    mockPlayers$ = signal([]);
    mockCardList = signal({ playersNumber: 0 } as CardList);

    MockInstance(NewGameCreator, () => ({
      currentPlayers: mockPlayers$.asReadonly(),
      addPlayer: jest.fn(),
      removePlayer: jest.fn(),
      reorderPlayers: jest.fn(),
    }));

    MockInstance(CardChoiceStore, () => ({
      state: mockCardList,
    }));
  });

  beforeAll(() => {
    component = MockRender(NewGamePlayerListPage).point.componentInstance;
  });

  it('should get players from NewGameCreator', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(component['players']()).toEqual(mockPlayers);
  });

  it('should get playersNumber from CardChoiceStore', () => {
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(component['playersCount']()).toEqual(3);
  });

  it('should not be able to validate if less than playersCount', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(component['canValidate']()).toEqual(false);
  });

  it('should be able to validate if equals playersCount', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRole.LOUP_GAROU,
        card: PlayerRole.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRole.VILLAGEOIS,
        card: PlayerRole.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(component['canValidate']()).toEqual(true);
  });

  it('should add player', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

    component['addPlayer']('player0');

    expect(newGameCreator.addPlayer).toHaveBeenCalledWith('player0');
  });

  it('should remove player', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

    component['removePlayer'](0);

    expect(newGameCreator.removePlayer).toHaveBeenCalledWith(0);
  });

  it('should reorder player', () => {
    const newGameCreator = ngMocks.get(NewGameCreator);

    const mockEvent = { previousIndex: 0, currentIndex: 2 } as CdkDragDrop<
      Player[]
    >;

    component['reorderPlayer'](mockEvent);

    expect(newGameCreator.reorderPlayers).toHaveBeenCalledWith(0, 2);
  });

  afterAll(MockReset);
});
