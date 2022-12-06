import { Component, EnvironmentInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'lgmj-root',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
