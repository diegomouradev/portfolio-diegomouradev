import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form = { name: '', email: '', message: '' };
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  onFormSubmit($event): void {
    console.log($event);
  }
}
