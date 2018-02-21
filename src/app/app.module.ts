import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router/';


import { AppComponent } from './app.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ListageComponent } from './listage/listage.component';

import { routes } from './routes';
import { AjoutPersonneService } from '../services/ajoutPersonne.service';
import { AjoutAdresseService } from '../services/ajoutAdresse.service';
import { HttpModule } from '@angular/http';
import { RechercheComponent } from './recherche/recherche.component';




@NgModule({
  declarations: [
    AppComponent,
    AjoutPersonneComponent,
    ListageComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AjoutPersonneService, AjoutAdresseService], //declaration du service
  bootstrap: [AppComponent]
})
export class AppModule { }
