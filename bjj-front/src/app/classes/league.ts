import Team from './team';
import Schedule from './schedule';

export default class League {
  name: string;
  teams: Team[];
  startDate: Date;
  schedule: Schedule;
  teamLimit: number;
  constructor(
    name: string,
    teams: Team[],
    startDate: Date,
    teamLimit: number,
    schedule: Schedule
  ) {
    this.name = name;
    this.teams = teams;
    this.startDate = startDate;
    this.teamLimit = teamLimit;
    this.schedule = schedule;
  }
}
