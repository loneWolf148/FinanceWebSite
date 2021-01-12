import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IUser } from '../../../models/login-models/IUser';
import { IAuthUser } from '../../../models/login-models/IAuthUser';

@Injectable({
  providedIn: 'root'
})
export class ConsumerLoginService {
  private readonly baseApiUrl = "http://localhost/Finance/api/Login";
  private readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  Login(model: IUser): Observable<IAuthUser> {
    const requestUrl = `${this.baseApiUrl}/LoginConsumer/`;
    return this.http.post<IAuthUser>(requestUrl, model, this.httpOptions).pipe(catchError(this.HandleError));
  }

  private HandleError(error: HttpErrorResponse) {
    const message = error.error.Message || "Server Fault";
    return throwError(message);
  }
}
