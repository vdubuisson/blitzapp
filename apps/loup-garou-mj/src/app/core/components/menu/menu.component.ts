import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonMenu } from '@ionic/angular';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lgmj-menu',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit, OnDestroy {
  @ViewChild('menu') private menu: IonMenu | undefined;

  private readonly destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.menu?.close());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
