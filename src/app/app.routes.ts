import { Routes } from '@angular/router';
import { confirmNewGameGuard } from '@/guards/confirm-new-game.guard';

export const appRoutes: Routes = [
  {
    path: 'victory',
    title: 'Victoire',
    loadComponent: () => import('@/pages/victory/victory.page'),
  },
  {
    path: 'game',
    title: 'Partie en cours',
    loadComponent: () => import('@/pages/game/game.page'),
  },
  {
    path: 'new-game',
    title: 'Nouvelle partie - Joueurs',
    loadComponent: () => import('@/pages/new-game/new-game.page'),
  },
  {
    path: 'new-game/roles',
    title: 'Nouvelle partie - Roles',
    loadComponent: () => import('@/pages/new-game-roles/new-game-roles.page'),
  },
  {
    path: 'roles-choice',
    title: 'Choix des rôles à jouer',
    canActivate: [confirmNewGameGuard],
    loadComponent: () => import('@/pages/roles-choice/roles-choice.page'),
  },
  {
    path: 'roles-rules',
    title: 'Règles des rôles',
    loadComponent: () => import('@/pages/roles-rules/roles-rules.page'),
  },
  {
    path: 'status-legends',
    title: 'Légende des statuts',
    loadComponent: () => import('@/pages/status-legends/status-legends.page'),
  },
  {
    path: 'options',
    title: 'Options',
    loadComponent: () => import('@/pages/options/options.page'),
  },
  {
    path: '',
    pathMatch: 'full',
    title: 'Accueil',
    loadComponent: () => import('@/pages/home/home.page'),
  },
];
