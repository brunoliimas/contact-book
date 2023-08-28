import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';


@NgModule({
  declarations: [
    ContactFormComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
