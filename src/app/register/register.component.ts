import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wis-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit() {
  }

  createUser() : void {
    this.router.navigate(['home']);
  }
}
