import { Component, OnInit } from '@angular/core';
import {IConsumer} from './../models/register-models/iregister';
import {RegisterservicesService} from '../services/register-serivces/registerservices.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
con:IConsumer={
  UserName:null,
    Name:null,
    Email:null,
    PhoneNumber:null,
    Password:null,
    AccountNo:null,
    IFSC:null,
    Address:null,
    CardType:null,
    DateofBirth:null
};
  constructor(private registerservice:RegisterservicesService,private router:Router) { }
  Register(){
    this.registerservice.Register(this.con).subscribe(()=>{
        alert("Registration Successfull Wait for the approval");
        this.router.navigate(['/login']);
      }
    );
  }
  saveConsumer(con:IConsumer):void{
    this.Register();
  }

  ngOnInit(): void {
  }

}
