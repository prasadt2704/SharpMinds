import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerUserData = {};
  loginUserData = {};
  constructor() { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.loginUserData);
  }
}
