import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login(); //pour récupérer données saisies
  message : string ;

  onLogin(){
    this.message = 'donnees saisies=' + JSON.stringify(this.login);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
