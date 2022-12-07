import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Validators,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'lgmj-new-player',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerRoleNamePipe,
  ],
  providers: [PlayerRoleNamePipe],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  @Output() newPlayer = new EventEmitter<string>();

  protected playerForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.newPlayer.emit(this.playerForm.value.name as string);
    this.playerForm.reset();
  }
}
