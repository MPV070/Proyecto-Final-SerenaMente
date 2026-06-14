import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profesionales } from './profesionales';
import { ProfessionalCard } from '../../components/professional-card/professional-card';



@NgModule({
  declarations: [
    Profesionales
    , ProfessionalCard
  ],
  imports: [
    CommonModule
  ]
})
export class ProfesionalesModule { }
