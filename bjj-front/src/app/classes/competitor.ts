import GymLocation from './gymlocation';
import Match from './match';
import Team from './team';

export default class Competitor {
  _id: String;
  firstName: String;
  lastName: String;
  email: String;
  password: string;
  homeGym: GymLocation;
  weight: number;
  expLevel: string;
  age: number;
  prevMatches: Match[];
  currentTeams: Team[];
  constructor(
    firstName: String,
    lastName: String,
    email: String,
    password: string,
    homeGym: GymLocation,
    weight: number,
    expLevel?: string,
    age?: number,
    prevMatches?: Match[],
    currentTeams?: Team[],
    _id?: String
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.homeGym = homeGym;
    this.weight = weight;
    this.expLevel = expLevel;
    this.age = age;
    this.prevMatches = prevMatches;
    this.currentTeams = currentTeams;
  }
}
