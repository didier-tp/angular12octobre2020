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
                            (montantRes :number)=>{this.montantConverti=montantRes;} ,
                            (error)=>{ console.log(error);}
                          );
  }

  initialiserConv(tabDevises : Devise[]){
    this.listeDevises = tabDevises;
    this.codeDeviseSource=tabDevises[0].code;
    this.codeDeviseCible=tabDevises[1].code;
    this.montant=100;
  }

  constructor(private _deviseService : DeviseService) {
    console.log("1");
    _deviseService.getAllDevises().subscribe(
      (tabDevises : Devise[])=>{ this.initialiserConv(tabDevises);
                                  console.log("3 (après , en différé)")} ,
      (error)=>{ console.log(error);}
    );
    console.log("2");
   }

  ngOnInit(): void {
  }

}
