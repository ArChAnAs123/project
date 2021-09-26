import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { RouterServiceService } from '../router-service.service';
import { Router } from '@angular/router';

import { Injector } from '@angular/core';
import { user } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private displayError: string = '';
  user: user = new user();

  // injecting here
  constructor(private _router: RouterServiceService, private _injector: Injector) { }

  ngOnInit(): void {
  }

  registerUser() {
   
    const authService = this._injector.get(AuthenticationService); 
    authService.registerUser(this.user);
    this._router.routeToLogin();

   
  }

 
}


