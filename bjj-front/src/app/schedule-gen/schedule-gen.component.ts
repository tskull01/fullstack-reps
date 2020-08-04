import { Component, OnInit, Input } from '@angular/core';
import Team from '../classes/team';

@Component({
  selector: 'app-schedule-gen',
  templateUrl: './schedule-gen.component.html',
  styleUrls: ['./schedule-gen.component.css'],
})
export class ScheduleGenComponent implements OnInit {
  constructor() {}
  @Input() leagueName: string;
  @Input() leagueTeams: Team[];
  @Input() startDate: Date;
  ngOnInit(): void {}
}
