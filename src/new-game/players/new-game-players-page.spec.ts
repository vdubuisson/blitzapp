import { CardChoiceStore } from '@/new-game/card-choice-store/card-choice-store';
import { NewGameCreator } from '@/new-game/creator/new-game-creator';
import { NewPlayer } from '@/new-game/players/new-player/new-player';
import { NewPlayerMock } from '@/new-game/players/new-player/new-player.mock';
import { CardList } from '@/shared/types/card-list';
import { Player } from '@/shared/types/player';
import { PlayerRoleEnum } from '@/types/player-role';
import { EMPTY, of, Subject } from 'rxjs';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/vitest';
import { MockComponents, MockDirectives } from 'ng-mocks';
import NewGamePlayersPage from './new-game-players-page';
import { PlayersGroupStorage } from '@/players-group/players-group-storage';
import { ModalManager } from '@/layout/modal/modal-manager';
import { SelectOverlayManager } from '@/layout/select-overlay/select-overlay-manager';
import { PlayersGroup } from '@/players-group/players-group';

describe('NewGamePlayersPage', () => {
  let spectator: Spectator<NewGamePlayersPage>;
  let mockPlayers$: WritableSignal<Player[]>;
  let mockCardList: WritableSignal<CardList>;
  let mockPlayersGroups: WritableSignal<PlayersGroup[]>;

  const createComponent = createComponentFactory({
    component: NewGamePlayersPage,
    mocks: [ModalManager, SelectOverlayManager],
    componentImports: [[NewPlayer, NewPlayerMock]],
    imports: [
      ...MockComponents(FaIconComponent),
      ...MockDirectives(RouterLink, CdkDropList, CdkDrag, CdkDragHandle),
    ],
  });

  beforeEach(() => {
    mockPlayers$ = signal([]);
    mockCardList = signal({ playersNumber: 0 } as CardList);
    mockPlayersGroups = signal([]);

    spectator = createComponent({
      providers: [
        mockProvider(NewGameCreator, {
          currentPlayers: mockPlayers$.asReadonly(),
          addPlayer: vi.fn(),
          removePlayer: vi.fn(),
          reorderPlayers: vi.fn(),
          loadPlayersGroup: vi.fn(),
        }),
        mockProvider(CardChoiceStore, {
          state: mockCardList,
        }),
        mockProvider(PlayersGroupStorage, {
          getGroups: () => mockPlayersGroups.asReadonly(),
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

  describe('openGroupsOverlay', () => {
    it('should open overlay with mapped groups options', () => {
      const groups: PlayersGroup[] = [
        { id: 'group1', name: 'Group 1', playersNames: ['a'] },
        { id: 'group2', name: 'Group 2', playersNames: ['b'] },
      ];
      mockPlayersGroups.set(groups);

      const selectOverlayManager = spectator.inject(SelectOverlayManager);
      (selectOverlayManager as any).selectedValue = EMPTY;

      spectator.component['openGroupsOverlay']();

      expect(selectOverlayManager.openOverlay).toHaveBeenCalledWith({
        header: 'Charger un groupe de joueurs',
        options: [
          { value: 'group1', label: 'Group 1' },
          { value: 'group2', label: 'Group 2' },
        ],
      });
    });

    it('should load players group when a group id is selected', () => {
      const groups: PlayersGroup[] = [
        { id: 'group1', name: 'Group 1', playersNames: ['a'] },
      ];
      mockPlayersGroups.set(groups);

      const selectOverlayManager = spectator.inject(SelectOverlayManager);
      const subject = new Subject<string | undefined>();
      (selectOverlayManager as any).selectedValue = subject.asObservable();

      const newGameCreator = spectator.inject(NewGameCreator);

      spectator.component['openGroupsOverlay']();
      subject.next('group1');

      expect(newGameCreator.loadPlayersGroup).toHaveBeenCalledWith(groups[0]);
    });

    it('should not load players group when undefined is selected', () => {
      const groups: PlayersGroup[] = [
        { id: 'group1', name: 'Group 1', playersNames: ['a'] },
      ];
      mockPlayersGroups.set(groups);

      const selectOverlayManager = spectator.inject(SelectOverlayManager);
      const subject = new Subject<string | undefined>();
      (selectOverlayManager as any).selectedValue = subject.asObservable();

      const newGameCreator = spectator.inject(NewGameCreator);

      spectator.component['openGroupsOverlay']();
      subject.next(undefined);

      expect(newGameCreator.loadPlayersGroup).not.toHaveBeenCalled();
    });
  });

  describe('openGroupsForm', () => {
    it('should show text form modal with initial value based on groups count', () => {
      mockPlayersGroups.set([{ id: 'g1', name: 'Group 1', playersNames: [] }]);

      const modalManager = spectator.inject(ModalManager);
      modalManager.showTextFormModal.mockReturnValue(EMPTY);

      spectator.component['openGroupsForm']();

      expect(modalManager.showTextFormModal).toHaveBeenCalledWith({
        header: 'Nom du groupe',
        initialValue: 'Groupe 2',
      });
    });

    it('should add players group with current players names when name is provided', () => {
      const mockPlayersList: Player[] = [
        {
          id: 0,
          name: 'player0',
          role: PlayerRoleEnum.VILLAGEOIS,
          card: PlayerRoleEnum.VILLAGEOIS,
          statuses: new Set(),
          isDead: false,
        },
      ];
      mockPlayers$.set(mockPlayersList);

      const modalManager = spectator.inject(ModalManager);
      modalManager.showTextFormModal.mockReturnValue(of('My Group'));

      const playersGroupStorage = spectator.inject(PlayersGroupStorage);

      spectator.component['openGroupsForm']();

      expect(playersGroupStorage.addGroup).toHaveBeenCalledWith({
        name: 'My Group',
        playersNames: ['player0'],
      });
    });

    it('should not add players group when form is cancelled', () => {
      const modalManager = spectator.inject(ModalManager);
      modalManager.showTextFormModal.mockReturnValue(of(undefined));

      const playersGroupStorage = spectator.inject(PlayersGroupStorage);

      spectator.component['openGroupsForm']();

      expect(playersGroupStorage.addGroup).not.toHaveBeenCalled();
    });
  });
});
