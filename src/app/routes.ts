import { RouterModule, Routes } from '@angular/router';

import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ListageComponent} from './listage/listage.component';
import { RechercheComponent } from './recherche/recherche.component';

export const routes: Routes = [
    { path: "ajout-personne", component: AjoutPersonneComponent },
    {path: "listage", component: ListageComponent},
    {path:"recherche", component: RechercheComponent}
];