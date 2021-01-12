import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,observable,of} from 'rxjs';
import { IConsumer } from 'src/app/models/register-models/iregister';
@Injectable({
  providedIn: 'root'
})
export class RegisterservicesService {
url='http://localhost/Finance/api';
httpOptions={
  headers:new HttpHeaders({'Content-type':'application/json'})
};
  constructor(private http:HttpClient) { }
  Register(con:IConsumer){
    return this.http.post<IConsumer>(this.url+"/PostConsumer",con,this.httpOptions);
  }
}
