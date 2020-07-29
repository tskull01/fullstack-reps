import Meet from './meet';

export default class Schedule {
  meets: Meet[];
  //duration in weeks
  duration: number;
  startDate: Date;
  constructor(meets: Meet[], duration: number, startDate: Date) {
    this.meets = meets;
    this.duration = duration;
    this.startDate = startDate;
  }
}
