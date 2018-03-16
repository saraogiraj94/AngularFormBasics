import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'gender': new FormControl('Male'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resovle, reject) => {
      setTimeout(() => {
        if (Control.value === 'test@test.com') {
          resovle({
            'emailIsForbidden': true
          });
        } else {
          resovle(null);
        }
      }, 2000);
    });
    return promise;
  }
}
