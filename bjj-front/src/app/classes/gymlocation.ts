export default class GymLocation {
  gymName: string;
  city: string;
  street: string;
  state: string;
  zipcode: number;
  constructor(
    gymName: string,
    city: string,
    street: string,
    state: string,
    zipcode: number
  ) {
    this.gymName = gymName;
    this.city = city;
    this.street = street;
    this.state = state;
    this.zipcode = zipcode;
  }
}
