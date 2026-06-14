import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotros } from './sobre-nosotros';

const routes: Routes = [
  { path: '', component: SobreNosotros }
];

@NgModule({
  declarations: [
    SobreNosotros
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SobreNosotrosModule { }
