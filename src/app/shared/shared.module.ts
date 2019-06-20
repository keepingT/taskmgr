import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    //通过导入SharedModule，即可导入CommonModule
    CommonModule
  ]
})
export class SharedModule { }
