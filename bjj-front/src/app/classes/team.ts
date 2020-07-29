import GymLocation from './gymlocation';
import Competitor from './competitor';

export default class Team {
  teamMembers: Competitor[];
  homeGym: GymLocation;
  coach: string;
  wins: number;
  losses: number;
  constructor(
    teamMembers: Competitor[],
    homeGym: GymLocation,
    coach: string,
    wins: number,
    losses: number
  ) {
    this.teamMembers = teamMembers;
    this.homeGym = homeGym;
    this.coach = coach;
    this.wins = wins;
    this.losses = losses;
  }
}
