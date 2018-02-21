import { Adresse } from './adresse';

export class Personne {

    //private _id: number,

    constructor(private nom: string, private adresse: Adresse) {

    }
    
    /*
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
*/

    /*
        public get nom(): string {
            return this._nom;
        }
    
        public set nom(value: string) {
            this._nom = value;
        }
    
    
        public get adresse(): Adresse {
            return this._adresse;
        }
    
        public set adresse(value: Adresse) {
            this._adresse = value;
        }
    */
}