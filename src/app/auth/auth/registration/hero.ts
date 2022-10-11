export class Hero {

    constructor(
    public id: number, 

    public nom: string= '',

    public prenom: string,

    public email: string,

    public mdp: string,

    public alterEgo?: string

    ) {  }
}