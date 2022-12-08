import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'victory',
    loadComponent: () =>
      import('./pages/victory/victory.page').then((m) => m.VictoryPage),
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./pages/game/game.page').then((m) => m.GamePage),
  },
  {
    path: 'new-game',
    loadComponent: () =>
      import('./pages/new-game/new-game.page').then((m) => m.NewGamePage),
  },
  {
    path: 'roles-rules',
    loadComponent: () =>
      import('./pages/roles-rules/roles-rules.page').then(
        (m) => m.RolesRulesPage
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
