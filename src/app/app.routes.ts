import { Routes, RouterModule, Router } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';

const ROUTES: Routes = [
    { path: '', component: ClientesComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'clientes/form', component: FormComponent },
    { path: 'clientes/form/:id', component: FormComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/clientes' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
