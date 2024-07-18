import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token','jfgdk6428')
  }
  doLogout(){
localStorage.clear()
  }
}
