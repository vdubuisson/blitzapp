import { Component, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { filter, map, mergeMap } from 'rxjs';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'lgmj-header',
  standalone: true,
  imports: [FaIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string | undefined;

  isMenuHidden = true;

  protected isGameInProgress: Signal<boolean> =
    this.gameService.isGameInProgress;

  protected faBars = faBars;

  constructor(
    private router: Router,
    private gameService: GameService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.title),
        takeUntilDestroyed(),
      )
      .subscribe((title) => {
        this.title = title;
        this.isMenuHidden = true;
      });
  }
}
