import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietComponent } from './diet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DietComponent],
  exports :[DietComponent]
})
export class SharedModule { }
