import { Routes } from '@angular/router';
import { confirmNewGameGuard } from '@/guards/confirm-new-game-guard';

export const appRoutes: Routes = [
  {
    path: 'victory',
    title: 'Victoire',
    loadComponent: () => import('@/pages/victory/victory.page'),
  },
  {
    path: 'current-game',
    title: 'Partie en cours',
    loadComponent: () => import('@/current-game/current-game-page'),
  },
  {
    path: 'new-game',
    canActivate: [confirmNewGameGuard],
    loadChildren: () => import('@/new-game/new-game-routes'),
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
    loadComponent: () => import('@/home/home-page'),
  },
];
