import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { MockService } from 'ng-mocks';
import { Subject } from 'rxjs';
import { GameService } from '../../services/game/game.service';
import { MenuComponent } from './menu.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, signal, WritableSignal } from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;
  let routerEvents$: Subject<NavigationEnd>;
  let gameService: GameService;
  let isGameInProgress: WritableSignal<boolean>;

  beforeEach(async () => {
    router = MockService(Router);
    routerEvents$ = new Subject();
    jest.spyOn(router, 'events', 'get').mockReturnValue(routerEvents$);
    isGameInProgress = signal(false);
    gameService = {
      isGameInProgress: isGameInProgress.asReadonly(),
    } as GameService;

    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: router },
        { provide: GameService, useValue: gameService },
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should close menu on NavigationEnd', () => {
    const menu = MockService(IonMenu);
    jest.spyOn(menu, 'close');
    component['menu'] = menu;

    routerEvents$.next(new NavigationEnd(0, '', ''));

    expect(menu.close).toHaveBeenCalled();
  });
});
