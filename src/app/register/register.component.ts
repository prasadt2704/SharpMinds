import { Component, OnInit } from '@angular/core';
import { AuthService } from '../LR_services/auth.service';
import { Router } from '@angular/router';
import { Command } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={};
  constructor(private _auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => this.registerUserData = res,
      err => console.log(err)
    )
    this.router.navigate(["/login"]);
  }
}
