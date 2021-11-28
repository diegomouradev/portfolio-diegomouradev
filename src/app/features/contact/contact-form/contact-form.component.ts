import { Component, OnInit } from '@angular/core';
import { ContactForm } from '@features/contact/contact-form/contact-form';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [ContactService],
})
export class ContactFormComponent implements OnInit {
  dataFromForm = { name: '', email: '', message: '' };

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  onFormSubmit(): void {
    let dataToSubmit = new ContactForm(
      this.dataFromForm.name,
      this.dataFromForm.email,
      this.dataFromForm.message,
      Date()
    );
    this.contactService
      .sendEmail(dataToSubmit)
      .subscribe((res) => console.log(res));
  }
}