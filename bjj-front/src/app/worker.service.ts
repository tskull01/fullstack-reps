import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, AsyncSubject, BehaviorSubject } from 'rxjs';
import Team from './classes/team';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}
  teamsArray: BehaviorSubject<Team[]> = new BehaviorSubject([]);

  returnAllModel(model) {
    //Takes a model singular 'location' and returns all documents on that table
    let returnObs = new AsyncSubject();
    this.http
      .get(`http://fullstack.cyou/api/all/${model}`)
      .subscribe((answer) => {
        console.log(`All ${model}`);
        returnObs.next(answer);
        returnObs.complete();
      });
    return returnObs;
  }
  getAdmin() {
    let returnObs = new AsyncSubject();
    this.http.get(`http://localhost:3000/admin`).subscribe((answer) => {
      returnObs.next(answer);
      returnObs.complete();
    });
    return returnObs;
  }
  generateTeams(teams, limit) {
    //take current behavior subject teams and generate a new team for each of them createModel(team)
    //when that is done signal to the schedule component that the teams are set and we can generate a schedule
    //then make each field of the schedule editable on click to edit and send it to a league schedule page
  }
}
