class Personne{
    constructor(public prenom : string  = "?",
        public nom : string  = "?",
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

let p1 = new Personne("jean","Bon",30);
console.log("nom=" +p1.nom);
try{ 
  p1.age = -5;
}catch(e){
    console.log(e);
}
p1.age  = 33;
console.log(JSON.stringify(p1));
