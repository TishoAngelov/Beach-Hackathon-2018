import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { AppErrorStateMatcher } from 'src/utils/error-state-matcher';

@Component({
  selector: 'wis-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordError: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new AppErrorStateMatcher();

  ngOnInit() {
  }

  createUser() : void {
    // const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // if(!filter.test(this.email)) {
    //   alert("Please, provide valid email");
    //   return;
    // }
    if(!(this.password === this.confirmPassword && this.password.length >= 6)) {
      this.passwordError = true;
      return;
    } else {
      this.passwordError = false;
    }
    if(this.emailFormControl.valid) {
      this.http.post('http://whereisthesea.apphb.com/api/account/register', {
        "Email": this.email,
        "Password": this.password,
        "ConfirmPassword": this.confirmPassword
      }).subscribe(data => {
        debugger;
        this.router.navigate(['login']);
      });
    }
  }
}
