import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:8084/SharpMinds/register";//backend api here
  private _loginUrl = "http://localhost:8084/SharpMinds/login";
  constructor(private http: HttpClient ) { }

  public loginUser(): Observable<User[]> {
    return this.http.get<User[]>(this._loginUrl);
  } 
  public registerUser(user){
    return this.http.post<User[]>(this._registerUrl,user);
  }
}
