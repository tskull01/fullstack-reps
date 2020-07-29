import Team from './team';
import Schedule from './schedule';

export default class League {
  name: string;
  teams: Team[];
  schedule: Schedule;

  constructor(name: string, teams: Team[], schedule: Schedule) {
    this.name = name;
    this.teams = teams;
    this.schedule = schedule;
  }
}
