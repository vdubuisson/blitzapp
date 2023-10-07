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
    path: 'new-game/roles',
    title: 'LG Assistant MJ | Nouvelle partie | Roles',
    loadComponent: () =>
      import('./pages/new-game-roles/new-game-roles.page').then(
        (m) => m.NewGameRolesPage,
      ),
  },
  {
    path: 'roles-choice',
    title: 'LG Assistant MJ | Choix des rôles à jouer',
    loadComponent: () =>
      import('./pages/roles-choice/roles-choice.page').then(
        (m) => m.RolesChoicePage,
      ),
  },
  {
    path: 'roles-rules',
    title: 'LG Assistant MJ | Règles des rôles',
    loadComponent: () =>
      import('./pages/roles-rules/roles-rules.page').then(
        (m) => m.RolesRulesPage,
      ),
  },
  {
    path: 'status-legends',
    title: 'LG Assistant MJ | Légende des statuts',
    loadComponent: () =>
      import('./pages/status-legends/status-legends.page').then(
        (m) => m.StatusLegendsPage,
      ),
  },
  {
    path: 'options',
    title: 'LG Assistant MJ | Options',
    loadComponent: () =>
      import('./pages/options/options.page').then((m) => m.OptionsPage),
  },
  {
    path: '',
    pathMatch: 'full',
    title: 'LG Assistant MJ | Accueil',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
];
