import { Component, OnInit, Input } from '@angular/core';
import { WorkerService } from '../worker.service';
import GymLocation from '../classes/gymlocation';
import { Observable } from 'rxjs';
import Team from '../classes/team';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneratorService } from '../generator.service';
import Model from '../classes/model';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css'],
})
export class TeamFormComponent implements OnInit {
  constructor(
    private workerService: WorkerService,
    private formBuilder: FormBuilder,
    private generatorService: GeneratorService
  ) {}
  gyms: GymLocation[] = [];
  gymNames: string[];
  @Input() events: Observable<void>;
  teamForm: FormGroup;
  @Input() teamLimit: number;
  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      gym: [null, [Validators.required]],
      coach: [null, [Validators.required]],
    });
    this.workerService.returnAllModel('location').subscribe((answer: any) => {
      console.log(JSON.stringify(answer) + 'updating locations');
      this.gyms = answer.data;
      this.gymNames = this.gyms.map((gym) => gym.gymName);
      console.log(this.gymNames);
    });
    this.events.subscribe((submit) => {
      let teamsArray = this.workerService.teamsArray;
      teamsArray.subscribe((teams) => {
        let gym = this.gyms.filter(
          (gym) => gym.gymName === this.teamForm.controls.gym.value
        )[0];
        let teamMembers = [];
        for (let i = 0; i < this.teamLimit; i++) {
          let generatedComp = this.generatorService.createModel(
            new Model('competitors', {
              firstName: 'Comp',
              lastName: `${i}`,
              homeGym: gym,
              email: `${gym.gymName}comp${i}@bjj-league.com`,
              password: 'jiujitsu',
            })
          );
          teamMembers.push(generatedComp);
        }
        teamsArray.next([
          ...teamsArray.value,
          new Team(this.teamForm.controls.name.value, teamMembers, gym),
        ]);
      });
    });
  }
}
