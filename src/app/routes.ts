import { Routes } from "@angular/router";
import { CardListComponent } from "./card-list/card-list.component";
import { PkmnDetailComponent } from "./pkmn-detail/pkmn-detail.component";


export const routeConfig: Routes = [
    {
        path:'',
        component: CardListComponent,
        title: 'Pokedex list',
    },

    {
        path:'pokemon/:id',
        component: PkmnDetailComponent,
        title: 'Pokemon details'
    }
]