import { Routes } from '@angular/router';

const HELP_ROUTES: Routes = [
  {
    path: 'roles',
    title: 'Règles des rôles',
    loadComponent: () => import('@/help/roles/help-roles-page'),
  },
  {
    path: 'status',
    title: 'Légende des statuts',
    loadComponent: () => import('@/help/status/help-status-page'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'roles',
  },
];

export default HELP_ROUTES;
