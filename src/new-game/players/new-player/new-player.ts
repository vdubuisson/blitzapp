import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  output,
  viewChild,
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
  imports: [FormsModule, ReactiveFormsModule, FaIconComponent],
  templateUrl: './new-player.html',
  styleUrl: './new-player.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPlayer {
  readonly newPlayer = output<string>();

  private readonly formBuilder = inject(FormBuilder);

  private readonly inputElement =
    viewChild<ElementRef<HTMLInputElement>>('input');

  protected readonly playerForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  protected readonly addIcon = faPlus;

  onSubmit() {
    this.newPlayer.emit(this.playerForm.value.name as string);
    this.playerForm.reset();
    this.inputElement()?.nativeElement.focus();
  }
}
