import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { InformationComponent } from './information/information.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent, InformationComponent],
  exports: [DashboardComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
