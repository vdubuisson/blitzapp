import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
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
import { GameOrchestrator } from '@/current-game/orchestrator/game-orchestrator';

@Component({
  selector: 'lgmj-header',
  imports: [FaIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private readonly router = inject(Router);
  private readonly gameOrchestrator = inject(GameOrchestrator);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly title = signal<string | undefined>('');
  protected readonly isMenuHidden = signal<boolean>(true);

  protected readonly isGameInProgress = this.gameOrchestrator.isGameInProgress;

  protected readonly menuIcon = faBars;

  ngOnInit(): void {
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
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((title) => {
        this.title.set(title);
        this.closeMenu();
      });
  }

  protected openMenu(): void {
    this.isMenuHidden.set(false);
  }

  protected closeMenu(): void {
    this.isMenuHidden.set(true);
  }
}
