import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Devise} from '../data/devise'

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  public getAllDevises() : Observable<Devise[]> {
    return of(this._tabDevise).pipe(delay(200)); 
                //simulation asynchrone avec delai de 200ms
  }

  public convertir(montant: number,
                  codeDeviseSource: string , 
                  codeDeviseCible : string) : Observable<number>{
     return of(montant * 1.23456);
  }

  constructor() { }

  private _tabDevise : Devise[] = [
    new Devise('EUR','Euro',1.0),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9),
    new Devise('JPY','Yen',123)
  ];
}
