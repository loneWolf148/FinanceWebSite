import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IConsumer } from '../../models/register-models/iconsumer';
import { IBank } from '../../models/register-models/IBank';
import { ICard } from '../../models/register-models/icard';

@Injectable({
  providedIn: 'root'
})
export class RegisterservicesService {
  readonly url = 'http://localhost/Finance/api/Register';
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  Register(newConsumer: IConsumer): Observable<string> {
    const requestUrl = `${this.url}/RegisterConsumer/`;
    return this.http.post<string>(requestUrl, newConsumer, this.httpOptions).pipe(catchError(this.HandleError));
  }

  GetCardTypes(): Observable<ICard[]> {
    const requestUrl = `${this.url}/GetCardTypes/`;
    return this.http.get<ICard[]>(requestUrl).pipe(catchError(this.HandleError));
  }

  GetBanks(): Observable<IBank[]> {
    const requestUrl = `${this.url}/GetBanks/`;
    return this.http.get<IBank[]>(requestUrl).pipe(catchError(this.HandleError));
  }

  private HandleError(error: HttpErrorResponse) {
    const message = error.error.Message;
    return throwError(message);
  }
}
