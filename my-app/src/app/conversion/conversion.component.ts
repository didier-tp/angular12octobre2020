import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
import { DeviseService} from '../common/service/devise.service'

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  montant : number;
  codeDeviseSource : string;
  codeDeviseCible : string;
  montantConverti : number;
  listeDevises : Devise[];

  onConvertir(){
        this._deviseService.convertir(this.montant,
                                      this.codeDeviseSource,
                                      this.codeDeviseCible)
                          .subscribe(
                            (montantRes)=>{this.montantConverti=montantRes;} ,
                            (error)=>{ console.log(error);}
                          );
  }

  constructor(private _deviseService : DeviseService) {
    _deviseService.getAllDevises().subscribe(
      (tabDevises)=>{ this.listeDevises = tabDevises} ,
      (error)=>{ console.log(error);}
    );
   }

  ngOnInit(): void {
  }

}
