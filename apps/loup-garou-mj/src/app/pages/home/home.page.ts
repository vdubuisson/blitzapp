import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lgmj-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
