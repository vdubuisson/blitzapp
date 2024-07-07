import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgmj-new-player',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FaIconComponent],
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss'],
})
export class NewPlayerComponent {
  @Output() newPlayer = new EventEmitter<string>();

  @ViewChild('input') inputElement?: ElementRef<HTMLInputElement>;

  protected playerForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  protected addIcon = faPlus;

  constructor(private formBuilder: FormBuilder) {}

  async onSubmit() {
    this.newPlayer.emit(this.playerForm.value.name as string);
    this.playerForm.reset();
    this.inputElement?.nativeElement.focus();
  }
}
