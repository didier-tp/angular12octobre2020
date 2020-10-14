import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay , map } from 'rxjs/operators';
import { Devise} from '../data/devise'

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  public getAllDevises() : Observable<Devise[]> {
    /*
    return of(this._tabDevise).pipe(delay(200)); 
                //simulation asynchrone avec delai de 200ms
                */
    //let url = "http://localhost:8282/devise-api/public/devise";
    let url = "./devise-api/public/devise";
    //en mode dev , cette url sera automatiquement préfixée par http://localhost:8282
    //selon les paramétrage de proxy.conf.json 
    //si démarrage via ng serve --proxy-config proxy.conf.json
    return this._http.get<Devise[]>(url);
  }

  public convertir(montant: number,
                  codeDeviseSource: string , 
                  codeDeviseCible : string) : Observable<number>{
     /*
     return of(montant * 1.23456);
     */
    let url = 
    `./devise-api/public/convert?source=${codeDeviseSource}&target=${codeDeviseCible}&amount=${montant}`;
    //`http://localhost:8282/devise-api/public/convert?source=${codeDeviseSource}&target=${codeDeviseCible}&amount=${montant}`;
    return this._http.get<any>(url)
    .pipe(
      map((resWsConv)=>resWsConv.result)
    );
    //.map() pour effectuer une transformation sur le resultat du get
    //le web service renvoie (au FORMAT JSON) :
    // {"source":"JPY","target":"USD","amount":300,"result":2.2723829722769278}
    //on a besoin d'extraire et retourner que la sous partie .result 
  }

  constructor(private _http :HttpClient) { }
/*
  private _tabDevise : Devise[] = [
    new Devise('EUR','Euro',1.0),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9),
    new Devise('JPY','Yen',123)
  ];
  */
}
