import Team from './team';
import GymLocation from './gymlocation';
import Match from './match';

export default class Meet {
  homeTeam: Team;
  awayTeam: Team;
  dateTime: Date;
  location: GymLocation;
  matches: Match[];
  completed: boolean;
  homeScore: number;
  awayScore: number;
  constructor(
    homeTeam: Team,
    awayTeam: Team,
    dateTime: Date,
    location: GymLocation,
    matches: Match[],
    completed: boolean,
    homeScore: number,
    awayScore: number
  ) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.dateTime = dateTime;
    this.location = location;
    this.matches = matches;
    this.completed = completed;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }
}
