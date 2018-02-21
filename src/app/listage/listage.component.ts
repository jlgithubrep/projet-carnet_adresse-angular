import { Component, OnInit } from '@angular/core';

import { Personne } from '../../class/personne';
import { Adresse } from '../../class/adresse';

import { AjoutPersonneService } from '../../services/ajoutPersonne.service';
import { AjoutAdresseService } from '../../services/ajoutAdresse.service';

@Component({
  selector: 'app-listage',
  templateUrl: './listage.component.html',
  styleUrls: ['./listage.component.css']
})
export class ListageComponent implements OnInit {

  personnes: Personne[] = [];
  adresses: Adresse[] = [];

  nom;
  rue;
  ville;
  codePostal;

  aff = true;
  idAff;//pour toggle que le div de modif du comment selectioné


  constructor(private ajoutPersonneService: AjoutPersonneService, private ajoutAdresseService: AjoutAdresseService) {
    this.ajoutPersonneService.getAllPersonnes().subscribe(res => this.personnes = res.json());
    this.ajoutAdresseService.getAllAdress().subscribe(res => this.adresses = res.json());
  }

  ngOnInit() {
  }

  suppr(i) {
    console.log(i);
    this.ajoutPersonneService.supprService(i);
  }

  modifPerson(i, n, r, v, c) {
    console.log(i);
    this.ajoutPersonneService.modifPersonService(i, n, r, v, c);
  }

  affich(i) {
    /*
    if (this.aff == false) {
      this.aff = true;
    } else {
      this.aff = false
    }
    */
    this.aff = !this.aff;//equivalent au bloc de conditions en commentaires ci-dessus.

    this.idAff = i;

  }


}
