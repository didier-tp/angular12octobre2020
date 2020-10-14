export class Devise{
    constructor(public code : string = undefined,
                public name : string = undefined,
                public change : number = undefined){}
}

// new Devise('EUR' , "Euro" , 1.0)