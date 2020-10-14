import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee : string = "white";
  //...
  public get couleurFondPreferee(){
    return this._couleurFondPreferee
  }

  public set couleurFondPreferee(nouvelleCouleur){
    this._couleurFondPreferee = nouvelleCouleur;
    localStorage.setItem("couleurFondPreferee",this._couleurFondPreferee);
  }

  constructor() { 
    let ancienneCouleur = localStorage.getItem("couleurFondPreferee");
    if(ancienneCouleur)
      this._couleurFondPreferee = ancienneCouleur;
    }
}
