import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  checkLogin(email, password) {
    //Check for user on the competitors table
    //return an observable next() on fulfill
  }
  createLogin(name, email, password, homeGym) {
    //Create new Competitor with these params
    //When comp is created push to observable and route back to home
  }
  createLocation(name, address) {
    //Create new location
  }
}
