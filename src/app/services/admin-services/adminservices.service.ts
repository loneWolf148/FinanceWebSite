import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { IConsumer } from '../../models/admin-models/iconsumer';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  private url = 'http://localhost/Finance/api/Admin';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVerifiedConsumers(): Observable<IConsumer[]> {
    return this.http.get<IConsumer[]>(this.url + "/getVerifiedConsumers/").pipe(catchError(this.handleError));
  }

  getConsumer(userName: string): Observable<IConsumer> {
    const requestUrl = `${this.url}/GetConsumer/${userName}/`;
    return this.http.get<IConsumer>(requestUrl).pipe(catchError(this.handleError));
  }

  editConsumer(consumer: IConsumer): Observable<string> {
    return this.http.put<string>(this.url + "/PutConsumer/" + consumer.UserName, consumer, this.httpOptions).pipe(catchError(this.handleError));
  }

  deleteConsumer(UserName: string): Observable<string> {
    const requestUrl = `${this.url}/DeleteConsumer/${UserName}/`;
    return this.http.delete<string>(requestUrl).pipe(catchError(this.handleError));
  }

  getUnverifiedConsumers(): Observable<IConsumer[]> {
    return this.http.get<IConsumer[]>(this.url + "/getUnverifiedConsumers/").pipe(catchError(this.handleError));
  }

  verifyConsumer(consumer: IConsumer): Observable<string> {
    const requestUrl = `${this.url}/VerifyConsumer/${consumer.UserName}/`;
    return this.http.put<string>(requestUrl, consumer, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const message = error.error.Message || "Server Fault";
    return throwError(message);
  }
}
