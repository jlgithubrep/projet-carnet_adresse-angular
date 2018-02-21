import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Personne } from '../class/personne';
import { Adresse } from '../class/adresse';

@Injectable()
export class AjoutAdresseService {
    adresses: Array<Adresse> = [];

    constructor(private http: Http) {

    }

    addAdressService(rue, ville, code) {

        this.http.post("http://localhost:5566/adresses", new Adresse(rue, ville, code)).subscribe();

    }

    getAllAdress() {

        return this.http.get("http://localhost:5566/adresses");
    }


}

//ce service est appelé en tant qu'attribut du constructor de ajout-personne.component
//il faut le declarer dans app.module !!!!!!
//le service va servir à envoyer/recevoir les données vers une bdd
//, on ne peut pas le faire directement depuis le ajout-personne.component
//ici le tab de Personne fait office de bdd