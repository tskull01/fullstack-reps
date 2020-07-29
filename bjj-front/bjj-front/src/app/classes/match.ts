import Competitor from './competitor';

export default class Match {
  homeComp: Competitor;
  awayComp: Competitor;
  official: string;
  homeScore: number;
  awayScore: number;
  constructor(
    homeComp: Competitor,
    awayComp: Competitor,
    official: string,
    homeScore: number,
    awayScore: number
  ) {
    this.homeComp = homeComp;
    this.awayComp = awayComp;
    this.official = official;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }
}
