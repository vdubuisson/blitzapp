import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PlayerRoleEnum } from '../../../core/enums/player-role.enum';
import { PlayerRoleNamePipe } from '../../../core/pipes/player-role-name/player-role-name.pipe';

@Component({
  selector: 'lgmj-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  @Input() set roles(roleList: PlayerRoleEnum[]) {
    this.sortedRoles = [...roleList].sort((a, b) =>
      this.playerRoleNamePipe
        .transform(a)
        .localeCompare(this.playerRoleNamePipe.transform(b))
    );
  }

  @Output() newPlayer = new EventEmitter<{
    name: string;
    role: PlayerRoleEnum;
  }>();

  protected sortedRoles: PlayerRoleEnum[] = [];

  protected playerForm = this.formBuilder.group({
    name: ['', Validators.required],
    role: this.formBuilder.control<PlayerRoleEnum | null>(
      null,
      Validators.required
    ),
  });

  constructor(
    private formBuilder: FormBuilder,
    private playerRoleNamePipe: PlayerRoleNamePipe
  ) {}

  onSubmit() {
    this.newPlayer.emit({
      name: this.playerForm.value.name as string,
      role: this.playerForm.value.role as PlayerRoleEnum,
    });
    this.playerForm.reset();
  }
}
