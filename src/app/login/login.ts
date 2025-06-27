import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  submitClicked:boolean=false;

  onSubmit(loginForm:NgForm){
    this.submitClicked = true;
    console.log(loginForm.value)
  }
}
