import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule, FormsModule],
})
export class ContactModule {}
