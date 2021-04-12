import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "../signup/signup.component";
import { LoginComponent } from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
 