import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiEndpoint = 'https://localhost:7255/api/email'; // Replace with your API endpoint

  constructor(private http: HttpClient,) {}

  sendEmail(emailData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    // Make a POST request to your API to send the email
    return this.http.post(`${this.apiEndpoint}`, emailData, options).pipe(
      tap(
        () => console.log('Email sent successfully'),
      ),
      catchError((error) => {
        console.error('Error sending email:', error);
        throw error; // Rethrow the error so you can handle it in your component
      })
    );
  }
}