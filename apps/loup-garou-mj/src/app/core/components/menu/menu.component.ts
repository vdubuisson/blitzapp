import { Component, Signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs';
import { GameService } from '../../services/game/game.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonMenu,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonRouterLink,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonItemDivider,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  protected isGameInProgress: Signal<boolean> =
    this.gameService.isGameInProgress;

  @ViewChild('menu') private menu: IonMenu | undefined;

  constructor(
    private router: Router,
    private gameService: GameService,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        this.menu?.close();
      });
  }
}
