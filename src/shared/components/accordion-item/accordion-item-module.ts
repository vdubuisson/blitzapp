import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgModule } from '@angular/core';
import { AccordionItem } from './accordion-item';

@NgModule({
  imports: [CdkAccordionModule, AccordionItem],
  exports: [AccordionItem, CdkAccordionModule],
})
export class AccordionItemModule {}
