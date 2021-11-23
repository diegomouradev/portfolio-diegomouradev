import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from 'src/app/shared/models/contact-form';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formData = new ContactForm('', '', '');

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  clearField($event): void {
    switch ($event.name) {
      case 'name':
        this.formData.name = '';
        break;
      case 'email':
        this.formData.email = '';
        break;
      case 'message':
        this.formData.email = '';
        break;
    }
  }
  onFormSubmit(): void {
    this.emailService
      .sedEmail(this.formData)
      .subscribe((result) => console.log(result));

    // this.formData = new ContactForm('', '', '');
  }
}
