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
  // private MJ_APIKEY_PUBLIC = '60c16b936e5494f9d1c6c5c93609b627';
  // private MJ_APIKEY_PRIVATE = 'e7c201dcd09adf143a128ca8ad2a62a8';
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  onFormSubmit($event): void {
    // mailjet.connect(this.MJ_APIKEY_PUBLIC, this.MJ_APIKEY_PRIVATE);
    // const eventString = JSON.stringify($event);
    // const request = mailjet.post('send', { version: 'v3.1' }).request({
    //   Messages: [
    //     {
    //       From: {
    //         Email: 'diegoo.demoura@gmail.com',
    //         Name: 'Me',
    //       },
    //       To: [
    //         {
    //           Email: 'diegoo.demoura@gmail.com',
    //           Name: 'You',
    //         },
    //       ],
    //       Subject: 'test 1',
    //       TextPart: 'Greetings from Mailjet!',
    //       HTMLPart: `${eventString}`,
    //     },
    //   ],
    // });
    // request
    //   .then((result) => {
    //     console.log(result.body);
    //   })
    //   .catch((err) => {
    //     console.log(err.statusCode);
    //   });
  }
}
