import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './core/components/menu/menu.component';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, IonApp, IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
