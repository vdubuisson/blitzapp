import { Routes } from '@angular/router';
import { confirmNewGameGuard } from './core/guards/confirm-new-game.guard';

export const appRoutes: Routes = [
  {
    path: 'victory',
    title: 'Victoire',
    loadComponent: () =>
      import('./pages/victory/victory.page').then((m) => m.VictoryPage),
  },
  {
    path: 'game',
    title: 'Partie en cours',
    loadComponent: () =>
      import('./pages/game/game.page').then((m) => m.GamePage),
  },
  {
    path: 'new-game',
    title: 'Nouvelle partie - Joueurs',
    loadComponent: () =>
      import('./pages/new-game/new-game.page').then((m) => m.NewGamePage),
  },
  {
    path: 'new-game/roles',
    title: 'Nouvelle partie - Roles',
    loadComponent: () =>
      import('./pages/new-game-roles/new-game-roles.page').then(
        (m) => m.NewGameRolesPage,
      ),
  },
  {
    path: 'roles-choice',
    title: 'Choix des rôles à jouer',
    canActivate: [confirmNewGameGuard],
    loadComponent: () =>
      import('./pages/roles-choice/roles-choice.page').then(
        (m) => m.RolesChoicePage,
      ),
  },
  {
    path: 'roles-rules',
    title: 'Règles des rôles',
    loadComponent: () =>
      import('./pages/roles-rules/roles-rules.page').then(
        (m) => m.RolesRulesPage,
      ),
  },
  {
    path: 'status-legends',
    title: 'Légende des statuts',
    loadComponent: () =>
      import('./pages/status-legends/status-legends.page').then(
        (m) => m.StatusLegendsPage,
      ),
  },
  {
    path: 'options',
    title: 'Options',
    loadComponent: () =>
      import('./pages/options/options.page').then((m) => m.OptionsPage),
  },
  {
    path: '',
    pathMatch: 'full',
    title: 'Accueil',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
];
