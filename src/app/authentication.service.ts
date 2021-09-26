import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { register } from './register';

import { user } from './User';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  constructor(private http: HttpClient,  private _router: Router) { }
  loginUrl: string = "http://localhost:3000/login";
  registerUrl: string = "http://localhost:3000/register";
  logoutUrl: string = " ";

  loginUser(user:any) {
    if(user.username != '' || user.username != 'admin' && user.password != 'admin' && user.password != '') {
      return new Promise<any>((resolve, reject) =>
      {
        this.http.post<any>(this.loginUrl, user)
        .subscribe(res => {
          const token = res.secretKey;
          localStorage.setItem('token', token);
          localStorage.setItem('email', res.email);
          console.log(res.secretKey);
          this._router.navigate(['/user']);
          return resolve(res)
        },error => reject("invalid login cred"));
      }); 
    } else {
      return new Promise((resolve, reject) => {
        return reject('incorrect credentials');
      });
    } 
  } 


  registerUser(user:any) {
    return this.http.post<any>(this.registerUrl, user).subscribe(res => {
      alert(user.name + "Registration successful ");
      console.log("Registration successful" + res);
    }, err => console.log(err));
  }

  logoutUser() {

    
    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this._router.navigate(['/login']);
  }

  private getToken(): boolean {
    // returns true if the token is present.
    return !!localStorage.getItem('token');
  }
  loggedIn() {
    return this.getToken();
  }

  getName() {
    if(localStorage.getItem('username')) {
      return localStorage.getItem('username');
    } else {
      return '';
    }
  }



}
