import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelect } from '@angular/material/select';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css'],
})
export class CreateLeagueComponent implements OnInit {
  @ViewChild('teamNum') teamNum: MatSelect;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private workerService: WorkerService
  ) {}
  selectedNum: number = 2;
  numbers: number[] = [2, 4, 6, 8, 10];
  teamForms: number[];
  submitSubject: Subject<any> = new Subject();
  leagueForm: FormGroup;
  selectedTeamLimit: number = 4;
  teamSizes = [4, 5];
  ngOnInit(): void {
    this.leagueForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      start: [null, [Validators.required]],
    });
  }
  returnHome() {
    this.router.navigate(['']);
  }
  setTeamForms() {
    this.teamNum.selectionChange.subscribe((value: number) => {
      this.teamForms = [];
      for (let i = 0; i < value; i++) {
        this.teamForms.push(i);
      }
    });
  }
  submit() {
    this.submitSubject.next();
    this.workerService.generateTeams(this.selectedNum, this.selectedTeamLimit);
    //Teams are pushed to behavior subject from each team form component
  }
}
