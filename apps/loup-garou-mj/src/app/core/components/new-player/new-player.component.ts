import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'lgmj-new-player',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerRoleNamePipe,
    IonItem,
    IonButton,
    IonIcon,
    IonInput,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  @Output() newPlayer = new EventEmitter<string>();

  @ViewChild(IonInput) ionInput?: IonInput;

  protected playerForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
    addIcons({ add });
  }

  async onSubmit() {
    this.newPlayer.emit(this.playerForm.value.name as string);
    this.playerForm.reset();
    (await this.ionInput?.getInputElement())?.focus();
  }
}
