import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'sobre',
        component: SobreComponent
    },
    {
        path:'produtos',
        component: ProdutosComponent,
        canActivate:[authGuard]
    },
    {
        path:'login',
        component: LoginComponent
    },
];
