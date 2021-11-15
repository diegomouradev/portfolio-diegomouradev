import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  readonly BASE_URL_DEV = 'http://localhost:4000/api/email/send-email';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  sedEmail(formData): Observable<any> {
    return this.http.post(`${this.BASE_URL_DEV}`, formData, this.httpOptions);
  }
}
