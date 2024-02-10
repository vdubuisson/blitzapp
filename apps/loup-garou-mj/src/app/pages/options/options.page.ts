import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  ToastController,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../core/components/header/header.component';
import { StorageService } from '../../core/services/storage/storage.service';

@Component({
  selector: 'lgmj-options',
  standalone: true,
  imports: [CommonModule, HeaderComponent, IonContent, IonButton],
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage {
  constructor(
    private storageService: StorageService,
    private toastController: ToastController,
  ) {}

  protected clear(): void {
    this.storageService.clear().subscribe(async () => {
      const toast = await this.toastController.create({
        message: "Stockage vidé. Rechargez l'application.",
        duration: 1500,
        position: 'top',
      });

      await toast?.present();
    });
  }
}
