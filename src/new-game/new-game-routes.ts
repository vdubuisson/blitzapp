import { Routes } from '@angular/router';

const NEW_GAMES_ROUTES: Routes = [
  {
    path: 'roles',
    title: 'Nouvelle partie - Rôles',
    loadComponent: () => import('@/new-game/roles/new-game-roles-page'),
  },
  {
    path: 'players',
    title: 'Nouvelle partie - Joueurs',
    loadComponent: () => import('@/new-game/players/new-game-players-page'),
  },
  {
    path: 'players-roles',
    title: 'Nouvelle partie - Rôles des joueurs',
    loadComponent: () =>
      import('@/new-game/players-roles/new-game-players-roles-page'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'roles',
  },
];

export default NEW_GAMES_ROUTES;
