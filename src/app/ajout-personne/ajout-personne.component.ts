import { Component, OnInit } from '@angular/core';

import { Personne } from '../../class/personne';
import { Adresse } from '../../class/adresse';

import { AjoutPersonneService } from '../../services/ajoutPersonne.service';
import { AjoutAdresseService } from '../../services/ajoutAdresse.service';

@Component({
  selector: 'app-ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit {

  //page ajout (message d'ajout de personne reussi), modif/suppr affichage, search (selon chaque critères)

  personnes: Personne[] = [];
  nom: string = "";

  rue: string = "";
  ville: string = "";
  codePostal: string = "";

  adresses: Adresse[] = []; // stockage de l'adresse existante choisie dans le select

  idAdr;//pour recupere depuis le template html, la valeur index d'une option du select

  toggleAdrBoolean = true; //bool pour affichage soit du div nouvelle adresse ou div adresse existante

  //affichageSuccesAjoutPersonne = false;

  constructor(private ajoutPersonneService: AjoutPersonneService, private ajoutAdresseService: AjoutAdresseService) {
    //this.personnes = ajoutPersonneService.getAllPersonnes();
    this.ajoutPersonneService.getAllPersonnes().subscribe(res => this.personnes = res.json());
    this.ajoutAdresseService.getAllAdress().subscribe(res => this.adresses = res.json());
  }

  ngOnInit() {
  }

  addPerson() {

    if (this.toggleAdrBoolean == true) {

      this.ajoutPersonneService.addPersonService(this.nom, new Adresse(this.rue, this.ville, this.codePostal));
      this.ajoutAdresseService.addAdressService(this.rue, this.ville, this.codePostal);

    } else {


      console.log(this.idAdr);
      console.log(this.adresses[this.idAdr]);
      this.ajoutPersonneService.addPersonService(this.nom, this.adresses[this.idAdr]);
    }
    //this.affichageSuccesAjoutPersonne = true;
    //alert(this.nom+" ajouté avec succès");
    this.nom = "";
  }

  toggleAdr(e) {
    //prend en param 0 pour nouvelle adresse, 1 pour une adresse existante
    //this.toggleAdreBoolean est à true de base

    if (this.toggleAdrBoolean == true && e == 1) {
      this.toggleAdrBoolean = false;
    } else if (this.toggleAdrBoolean == false && e == 0) {
      this.toggleAdrBoolean = true;
    }
  }

}
