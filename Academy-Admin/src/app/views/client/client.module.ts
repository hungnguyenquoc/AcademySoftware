import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from './client-home/client-home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientHomeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ClientHomeComponent],
})
export class ClientModule { }
