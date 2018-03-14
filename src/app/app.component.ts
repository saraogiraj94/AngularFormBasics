import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm;
  defaultQuestion = "pet";
  submitted=false;
  answer = '';
  defaultGender = 'Male';
  genders = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.submitted=true;
    this.user.username=this.signUpForm.value.userData.username;
    this.user.email=this.signUpForm.value.userData.email;
    this.user.gender=this.signUpForm.value.gender;
    this.user.secretQuestion=this.signUpForm.value.secret;
    this.user.answer=this.signUpForm.value.questionAnswer;
  }
}
