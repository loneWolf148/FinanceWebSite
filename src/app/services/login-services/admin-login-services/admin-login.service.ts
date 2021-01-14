import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IUser } from '../../../models/login-models/IUser';
import { IAuthUser } from '../../../models/login-models/IAuthUser';
import { AdminStorageModel } from '../../../models/storage.keys.model';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private readonly baseApiUrl = "http://localhost/Finance/api/Login";
  private readonly httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  get isAuthenticated(): boolean {
    return localStorage.getItem(AdminStorageModel.AuthIdentity) !== null;
  }

  get authenticatedAdminName(): string {
    return localStorage.getItem(AdminStorageModel.AuthName) ?? null;
  }

  constructor(private http: HttpClient) { }

  Login(model: IUser): Observable<IAuthUser> {
    const requestUrl = `${this.baseApiUrl}/LoginAdmin/`;
    return this.http.post<IAuthUser>(requestUrl, model, this.httpOptions).pipe(catchError(this.HandleError));
  }

  StoreAuthCredentials(user: IAuthUser): void {
    localStorage.setItem(AdminStorageModel.AuthIdentity, user.UserName);
    localStorage.setItem(AdminStorageModel.AuthName, user.Name);
    localStorage.setItem(AdminStorageModel.AuthPassword, user.Password);
  }

  Logout(): void {
    localStorage.clear();
  }

  private HandleError(error: HttpErrorResponse) {
    const message = error.error.Message || "Server Fault";
    return throwError(message);
  }
}
