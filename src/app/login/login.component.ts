import { Component, OnInit } from '@angular/core';
import { AuthService } from '../LR_services/auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser()
    .subscribe(
      res => this.loginUserData = res,
      err => console.log(err)
    )
    if(this.loginUserData=="admin"){
      this.router.navigate(["/admin"]);
    }else{
      this.router.navigate(["/userin"]);
    }
}}
