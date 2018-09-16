import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wis-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, fb: FormBuilder) {
    this.passwordsForm = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.matchValidator });

    this.registerForm = fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'passwords': this.passwordsForm
    });
  }


  registerForm;
  passwordsForm;

  matchValidator(group: FormGroup) {
    const mismatch = group.controls.password.value !== group.controls.confirmPassword.value;
    const length = group.controls.password.value.length < 6;


    if (!mismatch && !length) {
      return null;
    }

    return {
      mismatch,
      length
    };
  }

  ngOnInit() {
  }

  createUser(): void {
    if (this.registerForm.valid) {
      this.http.post('http://whereisthesea.apphb.com/api/account/register', {
        "Email": this.registerForm.controls.email.value,
        "Password": this.passwordsForm.controls.password.value,
        "ConfirmPassword": this.passwordsForm.controls.confirmPassword.value
      }).subscribe(data => {
        debugger;
        this.router.navigate(['login']);
      });
    }
  }
}
