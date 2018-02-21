import { Component, OnInit } from '@angular/core';

import { Personne } from '../../class/personne';
import { Adresse } from '../../class/adresse';

import { AjoutPersonneService } from '../../services/ajoutPersonne.service';
import { AjoutAdresseService } from '../../services/ajoutAdresse.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  personnes: Personne[] = [];
  adresses: Adresse[] = [];

  idRech;
  recherche = "";
  resultatRecherche = "";

  constructor(private ajoutPersonneService: AjoutPersonneService, private ajoutAdresseService: AjoutAdresseService) {
    this.ajoutPersonneService.getAllPersonnes().subscribe(res => this.personnes = res.json());
    this.ajoutAdresseService.getAllAdress().subscribe(res => this.adresses = res.json());
  }

  ngOnInit() {
  }

  affichageResultatRecherche(j){
    
    this.resultatRecherche = this.personnes[j].nom;
    this.resultatRecherche += this.personnes[j].adresse.rue;
    this.resultatRecherche += this.personnes[j].adresse.ville;
    this.resultatRecherche += this.personnes[j].adresse.codePostal;
    
  }

  search() {
    //console.log(this.idRech);

    this.resultatRecherche = "";

    if (this.idRech == 0) {

      //localeCompare renvoie 1 si rien de trouver, -1 si partiellement trouvé, 0 si exact match

      for (let i = 0; i < this.personnes.length; i++) {
        console.log(this.recherche.localeCompare(this.personnes[i].nom));
        if (this.recherche.localeCompare(this.personnes[i].nom) == 0) {
         this.affichageResultatRecherche(i);
        } 
      }

    }

    if (this.idRech == 1) {
      for (let i = 0; i < this.personnes.length; i++) {
        if (this.recherche.localeCompare(this.personnes[i].adresse.rue) == 0) {
         this.affichageResultatRecherche(i);
        } 
      }
    }

    if (this.idRech == 2) {
      for (let i = 0; i < this.personnes.length; i++) {
        if (this.recherche.localeCompare(this.personnes[i].adresse.ville) == 0) {
         this.affichageResultatRecherche(i);
        } 
      }
    }

    if (this.idRech == 3) {
      for (let i = 0; i < this.personnes.length; i++) {
        if (this.recherche.localeCompare(this.personnes[i].adresse.codePostal) == 0) {
         this.affichageResultatRecherche(i);
        } 
      }
    }

    if (this.resultatRecherche == ""){
      this.resultatRecherche = "Rien n'a été trouvé";
    }
    
  }
}
