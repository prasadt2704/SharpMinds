import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:7070/SharpMinds/login" //backend api here
  constructor(private http: HttpClient ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }
}
