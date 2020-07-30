import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import Model from './classes/model';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  constructor(private http: HttpClient) {}

  createModel(value: Model) {
    let returnObs = new Subject();
    this.http
      .post(`http://fullstack.cyou/api/${value.name}`, {
        data: value.data,
      })
      .subscribe((answer) => {
        returnObs.next(answer);
        returnObs.complete();
      });
    return returnObs;
  }
}
