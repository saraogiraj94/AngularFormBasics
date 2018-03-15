import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

@Component({
  selector: 'app-rc',
  templateUrl: './rc.component.html',
  styleUrls: ['./rc.component.css']
})
export class RcComponent implements OnInit {
  genders = ['Male', 'Female'];
  signupForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'gender': new FormControl('Male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
