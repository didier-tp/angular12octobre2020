import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  a : number = 2 ;
  b : number = 3 ;
  res : number;

  onAdditionner(){
     this.res = Number(this.a) + Number(this.b) ;
  }

  onMultiplier(){
    this.res = this.a * this.b ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
