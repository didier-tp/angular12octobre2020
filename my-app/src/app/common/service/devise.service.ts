import { Injectable } from '@angular/core';
import { Devise} from '../data/devise'

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private _tabDevise : Devise[] = [
    new Devise('EUR','Euro',1.0),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9),
    new Devise('JPY','Yen',123)
  ];

  public getAllDevises() : Devise[] {
    return this._tabDevise;
  }

  public convertir(montant: number,
                  codeDeviseSource: string , 
                  codeDeviseCible : string) : number{
     return montant * 1.23456;
  }

  constructor() { }
}
