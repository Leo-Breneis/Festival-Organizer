import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn() : boolean {
    return true;
    //TOTO: implement login logic
  }

  login() {

  }
}
