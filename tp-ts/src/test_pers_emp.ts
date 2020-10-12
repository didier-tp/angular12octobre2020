import { Employe } from "./employe";
import { Personne } from "./personne";


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


