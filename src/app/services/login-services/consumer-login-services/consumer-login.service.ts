import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IUser } from '../../../models/login-models/IUser';
import { IAuthUser } from '../../../models/login-models/IAuthUser';
import { ConsumerStorageModel } from '../../../models/storage.keys.model';
import { IChangePassword } from 'src/app/models/login-models/IChangePassword';

@Injectable({
  providedIn: 'root'
})
export class ConsumerLoginService {
  private readonly baseApiUrl = "http://localhost/Finance/api/Login";
  private readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  get isAuthenticated(): boolean {
    return localStorage.getItem(ConsumerStorageModel.AuthIdentity) !== null;
  }

  get authenticatedConsumerName(): string {
    return localStorage.getItem(ConsumerStorageModel.AuthName) ?? null;
  }

  get authenticatedConsumerIdentity(): string {
    return localStorage.getItem(ConsumerStorageModel.AuthIdentity) ?? null;
  }

  constructor(private http: HttpClient) { }

  Login(model: IUser): Observable<IAuthUser> {
    const requestUrl = `${this.baseApiUrl}/LoginConsumer/`;
    return this.http.post<IAuthUser>(requestUrl, model, this.httpOptions).pipe(catchError(this.HandleError));
  }

  ChangePassword(updatePassWordModel: IChangePassword): Observable<string> {
    const userName = this.authenticatedConsumerIdentity;
    const requestUrl = `${this.baseApiUrl}/ChangePassword/${userName}/`;

    return this.http.put<string>(requestUrl, updatePassWordModel, this.httpOptions).pipe(catchError(this.HandleError));
  }

  ForgetPassword(userName: string, emailAddress: string): Observable<string> {
    const requestUrl = `${this.baseApiUrl}/ForgotPassword/${userName}?email=${emailAddress}`;
    return this.http.get<string>(requestUrl).pipe(catchError(this.HandleError));
  }

  storeAuthCredentials(user: IAuthUser): void {
    localStorage.setItem(ConsumerStorageModel.AuthIdentity, user.UserName);
    localStorage.setItem(ConsumerStorageModel.AuthName, user.Name);
    localStorage.setItem(ConsumerStorageModel.AuthPassword, user.Password);
  }

  logout(): void {
    localStorage.clear();
  }

  private HandleError(error: HttpErrorResponse) {
    const message = error.error.Message || "Server Fault";
    return throwError(message);
  }
}
