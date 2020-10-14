import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService} from '../common/service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Login = new Login("admin1","pwdadmin1","admin"); //pour récupérer données saisies
  message : string ;

  onLogin(){
    //this.message = 'donnees saisies=' + JSON.stringify(this.login);
    this._loginService.postLogin(this.login).subscribe(
      (loginResponse : LoginResponse)=>{ this.message= loginResponse.message;
                                         console.log("token=" + loginResponse.token)},
      (error)=>{console.log(error); this.message="erreur";}
    );
  }

  constructor(private _loginService : LoginService) { }

  ngOnInit(): void {
  }

}
