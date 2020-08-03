import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, AsyncSubject } from 'rxjs';
import { CurrentService } from './current.service';
import Competitor from './classes/competitor';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private currentService: CurrentService
  ) {}

  checkLogin(email, password) {
    //Check for user on the competitors table
    //return an observable next() on fulfill

    let returnObs = new Subject();
    this.http
      .post('http://fullstack.cyou/api/signin', {
        email: email,
        password: password,
      })
      .subscribe((answer: Response) => {
        console.log(answer);
        returnObs.next(answer);
        returnObs.complete();
      });
    return returnObs;
  }
  signupSubmit(value) {
    console.log(value + 'Signup submit value');
    let returnObs = new AsyncSubject();
    this.http
      .post('http://fullstack.cyou/api/competitor', {
        ...value,
      })
      .subscribe((answer) => {
        console.log(answer);
        returnObs.next(answer);
        returnObs.complete();
      });
    return returnObs;
  }
}
