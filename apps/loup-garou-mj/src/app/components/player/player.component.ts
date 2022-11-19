import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Player } from '../../models/player.model';
import { PlayerRoleNamePipe } from '../../pipes/player-role-name/player-role-name.pipe';
import { PlayerRoleImagePipe } from '../../pipes/player-role-image/player-role-image.pipe';

@Component({
  selector: 'lgmj-player',
  standalone: true,
  imports: [CommonModule, IonicModule, PlayerRoleNamePipe, PlayerRoleImagePipe],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() player!: Player;

  @Input() removable = false;

  @Input() multiSelectable = false;

  @Output() remove = new EventEmitter<void>();

  @Output() checkedChange = new EventEmitter<boolean>();

  protected onCheckedChange(event: Event) {
    this.checkedChange.emit(
      (event as CustomEvent<{ checked: boolean }>).detail.checked
    );
  }

  protected onRemove() {
    this.remove.emit();
  }
}
