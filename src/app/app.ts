import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/layout/header/header';
import { SelectOverlay } from '@/layout/select-overlay/select-overlay';

@Component({
  selector: 'lgmj-root',
  imports: [Header, RouterOutlet, SelectOverlay],
  templateUrl: './app.html',
})
export class AppComponent {}
