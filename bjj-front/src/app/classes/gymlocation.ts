export default class GymLocation {
  _id: string;
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
    zipcode: number,
    _id?: string
  ) {
    this.gymName = gymName;
    this.city = city;
    this.street = street;
    this.state = state;
    this.zipcode = zipcode;
    this._id = _id;
  }
}
