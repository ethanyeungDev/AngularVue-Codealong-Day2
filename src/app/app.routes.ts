import { Routes } from '@angular/router';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { PageDefault } from './app.page-default';

export const routes: Routes = [
    { path: 'page-a', component: PageAComponent },
    { path: 'page-b', component: PageBComponent },
    { path: '', redirectTo: '/page-a', pathMatch: 'full' },
    { path: '**', component: PageDefault }  
];
