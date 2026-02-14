import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { NewPlayer } from '@/new-game/players/new-player/new-player';
import { NewPlayerMock } from '@/new-game/players/new-player/new-player.mock';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {
  provideZonelessChangeDetection,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/vitest';
import { MockComponents, MockDirectives } from 'ng-mocks';
import NewGamePlayersPage from './new-game-players-page';

describe('NewGamePage', () => {
  let spectator: Spectator<NewGamePlayersPage>;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockCardList: WritableSignal<CardList>;

  const createComponent = createComponentFactory({
    component: NewGamePlayersPage,
    providers: [provideZonelessChangeDetection()],
    componentImports: [[NewPlayer, NewPlayerMock]],
    imports: [
      ...MockComponents(FaIconComponent),
      ...MockDirectives(RouterLink, CdkDropList, CdkDrag, CdkDragHandle),
    ],
  });

  beforeEach(() => {
    mockPlayers$ = signal([]);
    mockCardList = signal({ playersNumber: 0 } as CardList);

    spectator = createComponent({
      providers: [
        mockProvider(NewGameCreator, {
          currentPlayers: mockPlayers$.asReadonly(),
          addPlayer: vi.fn(),
          removePlayer: vi.fn(),
          reorderPlayers: vi.fn(),
        }),
        mockProvider(CardChoiceStore, {
          state: mockCardList,
        }),
      ],
    });
  });

  it('should get players from NewGameCreator', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);

    expect(spectator.component['players']()).toEqual(mockPlayers);
  });

  it('should get playersNumber from CardChoiceStore', () => {
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(spectator.component['playersCount']()).toEqual(3);
  });

  it('should not be able to validate if less than playersCount', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(spectator.component['canValidate']()).toEqual(false);
  });

  it('should be able to validate if equals playersCount', () => {
    const mockPlayers: Player[] = [
      {
        id: 0,
        name: 'player0',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 1,
        name: 'player1',
        role: PlayerRoleEnum.LOUP_GAROU,
        card: PlayerRoleEnum.LOUP_GAROU,
        statuses: new Set(),
        isDead: false,
      },
      {
        id: 2,
        name: 'player2',
        role: PlayerRoleEnum.VILLAGEOIS,
        card: PlayerRoleEnum.VILLAGEOIS,
        statuses: new Set(),
        isDead: false,
      },
    ];
    mockPlayers$.set(mockPlayers);
    mockCardList.set({ playersNumber: 3 } as CardList);

    expect(spectator.component['canValidate']()).toEqual(true);
  });

  it('should add player', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    spectator.component['addPlayer']('player0');

    expect(newGameCreator.addPlayer).toHaveBeenCalledWith('player0');
  });

  it('should remove player', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    spectator.component['removePlayer'](0);

    expect(newGameCreator.removePlayer).toHaveBeenCalledWith(0);
  });

  it('should reorder player', () => {
    const newGameCreator = spectator.inject(NewGameCreator);

    const mockEvent = { previousIndex: 0, currentIndex: 2 } as CdkDragDrop<
      Player[]
    >;

    spectator.component['reorderPlayer'](mockEvent);

    expect(newGameCreator.reorderPlayers).toHaveBeenCalledWith(0, 2);
  });
});
