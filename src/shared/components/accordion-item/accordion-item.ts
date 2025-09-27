import { CDK_ACCORDION, CdkAccordionItem } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgmj-accordion-item',
  imports: [FaIconComponent],
  providers: [{ provide: CDK_ACCORDION, useValue: undefined }],
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItem extends CdkAccordionItem {
  protected readonly closedIcon = faChevronDown;
  protected readonly openedIcon = faChevronUp;

  readonly noInnerPadding = input(false);

  readonly headerColor = input<'light' | 'none'>('none');
}
