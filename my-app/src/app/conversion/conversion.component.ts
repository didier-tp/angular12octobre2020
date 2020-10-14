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
     this.montantConverti =
        this._deviseService.convertir(this.montant,
                                      this.codeDeviseSource,
                                      this.codeDeviseCible);
  }

  constructor(private _deviseService : DeviseService) {
    this.listeDevises = _deviseService.getAllDevises();
   }

  ngOnInit(): void {
  }

}
