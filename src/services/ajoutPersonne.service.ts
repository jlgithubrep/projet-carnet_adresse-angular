import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Personne } from '../class/personne';
import { Adresse } from '../class/adresse';

//import { AjoutAdresseService } from './ajoutAdresse.service';

@Injectable()
export class AjoutPersonneService {
    personnes: Array<Personne> = [];

    constructor(private http: Http) {

    }

    addPersonService(pers, adr) {
        /*
        let id: number = 1;
        if (this.personnes.length > 0) {
            id = this.personnes[this.personnes.length - 1].id;
            id++;
        }
        this.personnes.push(new Personne(id, c, new Adresse("rue", "ville", "00000")));
        */
        console.log("zes");

        this.http.post("http://localhost:5555/personnes", new Personne(pers, adr)).subscribe();
        //this.ajoutAdresseService.addAdressService(adraa);
    }

    getAllPersonnes() {
        //return this.personnes;
        return this.http.get("http://localhost:5555/personnes");
    }


    supprService(i) {
        let url = "http://localhost:5555/personnes";
        url = url + "/" + i;
        this.http.delete(url).subscribe();
    }


    modifPersonService(i, n, r, v, c) {
        let url = "http://localhost:5555/personnes";
        url = url + "/" + i;
        this.http.put(url, new Personne(n, new Adresse(r, v, c))).subscribe();
    }

}

//ce service est appelé en tant qu'attribut du constructor de ajout-personne.component
//il faut le declarer dans app.module !!!!!!
//le service va servir à envoyer/recevoir les données vers une bdd
//, on ne peut pas le faire directement depuis le ajout-personne.component
//ici le tab de Personne fait office de bdd