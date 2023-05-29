import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './core/components/menu/menu.component';

@Component({
  selector: 'lgmj-root',
  standalone: true,
  imports: [CommonModule, IonicModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
