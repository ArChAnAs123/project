import { Component, OnInit } from '@angular/core';
import { RouterServiceService } from '../router-service.service';
import { Injector } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { user } from '../User';
import { register } from '../register';
import { login } from '../login';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: user = new user();
  // todo: 2 way binding on this variable.
  private displayError: string = '';

  constructor(private _injector: Injector, private _router: RouterServiceService, private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  loginUser() {
    const authService = this._injector.get(AuthenticationService);
    authService.loginUser(this.user);
    this._router.routeToDashboard();

  }

  Register(){
    this._router.routeToRegister();
  }

}
