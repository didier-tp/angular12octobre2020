import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  listeCouleurs = [ "white" , "lightgrey" , "yellow" , "green" ];
  listeHumeurs = [ "humeurInconnue" , "bonneHumeur" , "mauvaiseHumeur"];
  humeurSelectionnee : string = "humeurInconnue";

  onChangeH(){
    this.changementHumeur.emit({value:this.humeurSelectionnee});//emission vers parent
  }

  @Output()
  changementHumeur : EventEmitter<{value:string}> = new EventEmitter<{value:string}>() ;

  constructor(public preferencesService :PreferencesService) { }

  ngOnInit(): void {
  }

}
