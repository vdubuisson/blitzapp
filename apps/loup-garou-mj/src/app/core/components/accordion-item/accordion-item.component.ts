import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CDK_ACCORDION, CdkAccordionItem } from '@angular/cdk/accordion';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lgmj-accordion-item',
  standalone: true,
  imports: [FaIconComponent],
  providers: [{ provide: CDK_ACCORDION, useValue: undefined }],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  animations: [
    trigger('slideOpen', [
      state('opened', style({ height: '*' })),
      state('closed', style({ height: '0' })),
      transition('opened <=> closed', [animate('0.3s ease')]),
    ]),
  ],
})
export class AccordionItemComponent extends CdkAccordionItem {
  protected closedIcon = faChevronDown;
  protected openedIcon = faChevronUp;

  @Input()
  noInnerPadding = false;

  @Input()
  headerColor: 'light' | 'none' = 'none';
}
