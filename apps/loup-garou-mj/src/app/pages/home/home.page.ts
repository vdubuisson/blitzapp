import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'lgmj-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, HeaderComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
