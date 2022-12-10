import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'victory',
    title: 'LG Assistant MJ | Victoire',
    loadComponent: () =>
      import('./pages/victory/victory.page').then((m) => m.VictoryPage),
  },
  {
    path: 'game',
    title: 'LG Assistant MJ | Partie en cours',
    loadComponent: () =>
      import('./pages/game/game.page').then((m) => m.GamePage),
  },
  {
    path: 'new-game',
    title: 'LG Assistant MJ | Nouvelle partie',
    loadComponent: () =>
      import('./pages/new-game/new-game.page').then((m) => m.NewGamePage),
  },
  {
    path: 'roles-rules',
    title: 'LG Assistant MJ | Règles des rôles',
    loadComponent: () =>
      import('./pages/roles-rules/roles-rules.page').then(
        (m) => m.RolesRulesPage
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    title: 'LG Assistant MJ | Accueil',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
];
