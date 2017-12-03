import { MovieComponent } from './movie/movie.component';
import { RouterModule, Routes } from '@angular/router';
import {ActorComponent} from './actor/actor.component';
import {ListmoviesComponent} from './listmovies/listmovies.component';
import {AddmovieComponent} from './addmovie/addmovie.component';
import {AddactorComponent} from './addactor/addactor.component';
import {AdddirectorComponent} from './adddirector/adddirector.component';

export const routes:Routes = [
    {path:'', redirectTo:'listmovies', pathMatch:'full'},
    {path:'listmovies',component: ListmoviesComponent},
    {path:'addmovie',component:AddmovieComponent },
    {path: 'movie/:id', component: MovieComponent},
    {path: 'listactors', component: ActorComponent},
    {path: 'addactor', component: AddactorComponent},
    {path: 'adddirector', component: AdddirectorComponent}
];

export const routing = RouterModule.forRoot(routes);