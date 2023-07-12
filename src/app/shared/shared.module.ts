import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SearchInputComponent } from './search-input/search-input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
