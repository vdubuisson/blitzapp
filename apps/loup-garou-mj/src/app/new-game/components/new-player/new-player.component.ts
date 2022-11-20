import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerRoleEnum } from '../../../enums/player-role.enum';

@Component({
  selector: 'lgmj-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  @Output() newPlayer = new EventEmitter<{
    name: string;
    role: PlayerRoleEnum;
  }>();

  protected roles = Object.values(PlayerRoleEnum);
  protected playerForm = this.formBuilder.group({
    name: ['', Validators.required],
    role: this.formBuilder.control<PlayerRoleEnum | null>(
      null,
      Validators.required
    ),
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.newPlayer.emit({
      name: this.playerForm.value.name as string,
      role: this.playerForm.value.role as PlayerRoleEnum,
    });
    this.playerForm.reset();
  }
}
