import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';
import { SelectOverlayComponent } from '@/components/select-overlay/select-overlay.component';

@Component({
  selector: 'lgmj-root',
  imports: [HeaderComponent, RouterOutlet, SelectOverlayComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
