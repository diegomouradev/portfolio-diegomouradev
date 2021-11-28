import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  readonly BASE_URL_PROD = 'https://www.diegomoura.dev/api/email/send-email';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  sendEmail(formData): Observable<any> {
    return this.http.post(`${this.BASE_URL_PROD}`, formData, this.httpOptions);
  }
}
