import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
  ,
  exports:[
    CommonModule,
    BrowserAnimationsModule,
     BrowserModule,
    ReactiveFormsModule,

  ]
 
})
export class SharedModule { }
