import { Routes } from '@angular/router';
import { confirmNewGameGuard } from '@/guards/confirm-new-game-guard';

export const APP_ROUTES: Routes = [
  {
    path: 'victory',
    title: 'Victoire',
    loadComponent: () => import('@/victory/victory-page'),
  },
  {
    path: 'current-game',
    title: 'Partie en cours',
    loadComponent: () => import('@/current-game/page/current-game-page'),
  },
  {
    path: 'new-game',
    canActivate: [confirmNewGameGuard],
    loadChildren: () => import('@/new-game/new-game-routes'),
  },
  {
    path: 'help',
    loadChildren: () => import('@/help/help-routes'),
  },
  {
    path: 'options',
    title: 'Options',
    loadComponent: () => import('@/options/options.page'),
  },
  {
    path: '',
    pathMatch: 'full',
    title: 'Accueil',
    loadComponent: () => import('@/home/home-page'),
  },
];
