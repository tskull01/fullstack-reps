import GymLocation from './gymlocation';
import Match from './match';

export default class Competitor {
  name: String;
  email: String;
  expLevel: string;
  homeGym: GymLocation;
  weight: number;
  prevMatches: Match[];
  password: string;
  constructor(
    name: string,
    email: string,
    expLevel: string,
    homeGym: GymLocation,
    weight: number,
    prevMatches: Match[],
    password: string
  ) {
    this.name = name;
    this.email = email;
    this.expLevel = expLevel;
    this.homeGym = homeGym;
    this.weight = weight;
    this.prevMatches = prevMatches;
    this.password = password;
  }
}
