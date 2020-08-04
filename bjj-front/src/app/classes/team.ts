import GymLocation from './gymlocation';
import Competitor from './competitor';
import League from './league';

export default class Team {
  _id: string;
  name: string;
  teamMembers: Competitor[];
  homeGym: GymLocation;
  league: League;
  coach: string;
  wins: number;
  losses: number;
  constructor(
    name: string,
    teamMembers: Competitor[],
    homeGym: GymLocation,
    coach?: string,
    wins?: number,
    losses?: number,
    _id?: string
  ) {
    this.name = name;
    this.teamMembers = teamMembers;
    this.homeGym = homeGym;
    this.coach = coach;
    this.wins = wins;
    this.losses = losses;
    this._id = _id;
  }
}
