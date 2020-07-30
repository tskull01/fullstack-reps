import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  checkLogin(email, password) {
    //Check for user on the competitors table
    //return an observable next() on fulfill

    let returnObs = new Subject();
    this.http
      .post('http://fullstack.cyou/api/competitor', {
        email: email,
        password: password,
      })
      .subscribe((answer) => {
        returnObs.next(answer);
        returnObs.complete();
      });
    return returnObs;
  }
}
