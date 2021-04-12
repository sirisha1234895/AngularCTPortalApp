import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './signup.component';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],exports:[SignUpComponent]
})
export class SignupModule { }
