import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  email: string;
  password: string;
  
  ngOnInit() {
  }

  login() : void {
    if(this.email === 'admin' && this.password === 'admin'){
     this.router.navigate(['home']);
    }else {
      alert('Invalid credentials');
    }
  }

  register() : void {
    this.router.navigate(['register']);
  }
}
