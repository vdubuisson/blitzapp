import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ItemReorderCustomEvent } from '@ionic/angular';
import { Player } from '../../core/models/player.model';
import { NewPlayerComponent } from '../../core/components/new-player/new-player.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { PLAYER_TRACK_BY } from '../../core/utils/player.track-by';
import { NewGameService } from '../../core/services/new-game/new-game.service';
import { RouterLink } from '@angular/router';
import { CardChoiceService } from '../../core/services/card-choice/card-choice.service';

@Component({
  selector: 'lgmj-new-game',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    NewPlayerComponent,
    HeaderComponent,
    RouterLink,
  ],
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage {
  protected players: Signal<Player[]> = this.newGameService.currentPlayers;

  protected playerTrackBy = PLAYER_TRACK_BY;

  protected canValidate: Signal<boolean> = computed(
    () => this.players().length === this.playersCount(),
  );

  protected playersCount: Signal<number> = computed(
    () => this.cardChoiceService.currentChosenCards().playersNumber,
  );

  constructor(
    private newGameService: NewGameService,
    private cardChoiceService: CardChoiceService,
  ) {}

  protected addPlayer(name: string): void {
    this.newGameService.addPlayer(name);
  }

  protected reorderPlayer(event: Event): void {
    const reorderEvent = event as ItemReorderCustomEvent;
    this.newGameService.reorderPlayers(
      reorderEvent.detail.from,
      reorderEvent.detail.to,
    );
    reorderEvent.detail.complete(false);
  }

  protected removePlayer(id: number): void {
    this.newGameService.removePlayer(id);
  }
}
