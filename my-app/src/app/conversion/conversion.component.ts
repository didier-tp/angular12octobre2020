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
                          .subscribe({
                           next: (montantRes :number)=>{this.montantConverti=montantRes;} ,
                           error : (error)=>{ console.log(error);}
                          });
  }

  constructor(private _deviseService : DeviseService) {
    console.log("1");
    _deviseService.getAllDevises().subscribe(
      (tabDevises : Devise[])=>{ this.listeDevises = tabDevises;
                                  console.log("3 (après , en différé)")} ,
      (error)=>{ console.log(error);}
    );
    console.log("2");
   }

  ngOnInit(): void {
  }

}
