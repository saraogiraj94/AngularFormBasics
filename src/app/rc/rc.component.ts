import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('Male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
