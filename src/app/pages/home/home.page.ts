import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-home',
  imports: [RouterLink],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
