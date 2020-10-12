class Personne{
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


class Employe extends Personne{
    numero:number=0;
    salaire:number = 0;
    constructor(prenom:string="?",nom:string="?",age:number=0){
        super(prenom, nom, age);
    }
}

let e1= new Employe("alex",'Therieur',33);
e1.numero=1;
e1.salaire=2000;
console.log(JSON.stringify(e1));

let p1 = new Personne("jean","Bon",30);
console.log("nom=" +p1.nom);
try{ 
  p1.age = -5;
}catch(e){
    console.log(e);
}
p1.age  = 33;
console.log(JSON.stringify(p1));
