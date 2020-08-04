import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  checkLogin(email, password) {
    //Check for user on the competitors table
    //return an observable next() on fulfill
    console.log(email + 'EMAIL PASSED IN ' + password + ' Password');
    let returnObs = new AsyncSubject();
    this.http
      .post('http://localhost:3000/api/signin', {
        email: email,
        password: password,
      })
      .subscribe((answer: any) => {
        console.log(answer + 'answer');
        if (answer) {
          console.log(JSON.stringify(answer.data) + 'logged in answer');
          if (answer.data) {
            //signed in
            returnObs.next(answer);
            returnObs.complete();
          } else {
            //couldn't find user
            console.log('couldnt find user');
          }
        } else {
          //incorrect password
          returnObs.next(false);
          returnObs.complete();
        }
      });
    return returnObs;
  }
  signupSubmit(value) {
    console.log(value + 'Signup submit value');
    let returnObs = new AsyncSubject();
    this.http
      .post('http://fullstack.cyou/api/competitors', {
        ...value,
      })
      .subscribe((answer: any) => {
        //Generate JWT for admin user or coach user
        console.log(answer);
        returnObs.next(answer.data);
        returnObs.complete();
      });
    return returnObs;
  }
}
