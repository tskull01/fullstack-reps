import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import GymLocation from '../classes/gymlocation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  createGym: boolean = false;
  gyms: GymLocation[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, Validators.required],
      gymSelect: [null, Validators.required],
      gymName: [null],
      gymAddress: [null],
    });
  }

  submit(value) {
    // process form data and create new competitor
    //and add to competitor table
    //seperate gym and competitor data
  }
  showGymForm() {
    this.createGym = !this.createGym;
  }
}
