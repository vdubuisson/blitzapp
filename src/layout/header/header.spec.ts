import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';
import { signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import {
  byTestId,
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator/vitest';
import { of, Subject } from 'rxjs';
import { Header } from './header';

describe('Header', () => {
  let spectator: Spectator<Header>;

  const isGameInProgress = signal(false);
  const routerEvents = new Subject<RouterEvent>();

  const createComponent = createComponentFactory({
    component: Header,
    providers: [
      mockProvider(ActivatedRoute, { outlet: 'primary', title: of('Test') }),
      mockProvider(GameOrchestrator, { isGameInProgress }),
      mockProvider(Router, { events: routerEvents.asObservable() }),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display the title from the route', async () => {
    routerEvents.next(new NavigationEnd(1, '', ''));
    await spectator.fixture.whenStable();

    expect(byTestId('title')).toHaveText('Test');
  });

  it('should open menu on menu icon click', () => {
    const menu = byTestId('menu');
    expect(menu).toHaveClass('hidden');

    spectator.click(byTestId('menu-icon'));
    expect(menu).not.toHaveClass('hidden');
  });

  it('should close menu on backdrop click', () => {
    const menu = byTestId('menu');

    spectator.click(byTestId('menu-icon'));
    expect(menu).not.toHaveClass('hidden');

    spectator.click(byTestId('backdrop'));
    expect(menu).toHaveClass('hidden');
  });

  it('should close menu on navigation', async () => {
    const menu = byTestId('menu');

    spectator.click(byTestId('menu-icon'));
    expect(menu).not.toHaveClass('hidden');

    routerEvents.next(new NavigationEnd(1, '', ''));
    await spectator.fixture.whenStable();
    expect(menu).toHaveClass('hidden');
  });

  it('should show current game link when game is in progress', () => {
    isGameInProgress.set(true);
    spectator.detectChanges();

    expect(byTestId('current-game-link')).toExist();
  });

  it('should hide current game link when no game is in progress', () => {
    isGameInProgress.set(false);
    spectator.detectChanges();

    expect(byTestId('current-game-link')).not.toExist();
  });
});
