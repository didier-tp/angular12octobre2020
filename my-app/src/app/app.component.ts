import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  onChangementHumeur(evt:{value:string}){
      let nouvelleHumeur = evt.value;
      console.log("nouvelleHumeur="+nouvelleHumeur);
      //alert(nouvelleHumeur);
  }
}
