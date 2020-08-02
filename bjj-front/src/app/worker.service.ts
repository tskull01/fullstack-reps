import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}

  returnAllModel(model) {
    //Takes a model singular 'location' and returns all documents on that table
    let returnObs = new Subject();
    this.http
      .get(`http://fullstack.cyou/api/all/${model}`)
      .subscribe((answer) => {
        console.log(`All ${model}`);
        returnObs.next(answer);
      });
    return returnObs;
  }
}
