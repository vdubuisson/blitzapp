import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../core/components/header/header.component';
import {
  IonButton,
  IonContent,
  IonRouterLink,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    IonRouterLink,
    IonContent,
    IonButton,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
