export class Personne{
    constructor(public prenom : string  = undefined,
               public nom : string  = undefined,
               private _age : number= 0){
              }

        public get age(): number {
            return this._age;
        }

        public set age(newAge : number ) {
            if(newAge >=0) {
                this._age = newAge;
            }else throw "age négatif invalid";
        }
}




