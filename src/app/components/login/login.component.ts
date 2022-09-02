import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {
  iLogin: Ilogin = new Ilogin();
  AuthGuardService!: Boolean; 

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    debugger;
    if(this.iLogin.Username === 'admin' && this.iLogin.Password === 'admin') {
      this.router.navigateByUrl('/open-drink-list');
      alert('Your Now Logged in')
      this.AuthGuardService = true;
    } else {
      alert('wrong details')
    }
  }
}

export class Ilogin {
  Username: string | undefined;
  Password: string | undefined;
}

