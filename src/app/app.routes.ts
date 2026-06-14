import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Registro } from './pages/register/registro/registro';
import { RegisterPreferencesComponent } from './pages/register/register-preferences/register-preferences.component';
import { RegisterTagsComponent } from './pages/register/register-tags/register-tags.component';
import { RegisterLegalComponent } from './pages/register/register-legal/register-legal.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: Registro },
  { path: 'registro/preferencias', component: RegisterPreferencesComponent },
  { path: 'registro/etiquetas', component: RegisterTagsComponent },
  { path: 'registro/legal', component: RegisterLegalComponent },
  {
    path: 'profesionales',
    loadChildren: () =>
      import('./pages/profesionales/profesionales-module')
        .then(m => m.ProfesionalesModule)
  },
  {
    path: 'sobreNosotros',
    loadChildren: () =>
      import('./pages/sobre-nosotros/sobre-nosotros-module')
        .then(m => m.SobreNosotrosModule)
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login-module')
        .then(m => m.LoginModule)
  }



];
