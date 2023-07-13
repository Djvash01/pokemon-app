import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { InformationComponent } from './information/information.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, InformationComponent, PokemonFormComponent],
  exports: [DashboardComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
