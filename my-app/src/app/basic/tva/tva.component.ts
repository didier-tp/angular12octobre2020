import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  ht : number ;
  tauxTva : number = 20; // en %
  tva : number;
  ttc : number

  listeTaux : number[] = [ 5 , 10 , 20]

  onCalculerTvaEtTtc(){
    this.tva = this.ht * this.tauxTva / 100
    this.ttc = Number(this.ht) + Number(this.tva)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
