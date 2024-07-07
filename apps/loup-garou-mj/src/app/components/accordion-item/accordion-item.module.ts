import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@NgModule({
  imports: [CdkAccordionModule, AccordionItemComponent],
  exports: [AccordionItemComponent, CdkAccordionModule],
})
export class AccordionItemModule {}
