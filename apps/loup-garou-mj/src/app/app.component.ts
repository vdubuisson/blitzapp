import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { SelectOverlayComponent } from './core/components/select-overlay/select-overlay.component';

@Component({
  selector: 'lgmj-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, SelectOverlayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
