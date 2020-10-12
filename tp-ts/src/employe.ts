import { Personne } from "./personne";

export class Employe extends Personne{
    numero:number=0;
    salaire:number = 0;
    constructor(prenom:string="?",nom:string="?",age:number=0){
        super(prenom, nom, age);
    }
}