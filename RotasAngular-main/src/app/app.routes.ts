import { Routes } from '@angular/router';
import { HomeComponent } from './componennts/home/home.component';
import { AboutComponent } from './componennts/about/about.component';

export const routes: Routes = [
    //{path : '', redirectTo: '/home', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path:'**', redirectTo:''}
];
