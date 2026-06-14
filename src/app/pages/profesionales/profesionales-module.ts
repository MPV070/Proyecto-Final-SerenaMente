import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Profesionales } from './profesionales';
import { ProfessionalCard } from '../../components/professional-card/professional-card';



@NgModule({
  declarations: [
    Profesionales,
    ProfessionalCard
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: Profesionales }
    ])
  ]
})
export class ProfesionalesModule { }
