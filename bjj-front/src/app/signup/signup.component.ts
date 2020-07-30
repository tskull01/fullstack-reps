import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import GymLocation from '../classes/gymlocation';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneratorService } from '../generator.service';
import Model from '../classes/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  gymBool: boolean = false;
  gyms: GymLocation[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private generatorService: GeneratorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      gymSelect: [null, Validators.required],
      gymName: [null],
      gymAddress: [null],
    });
  }

  submit(value) {
    // process form data and create new competitor
    //and add to competitor table
    //seperate gym and competitor data
    console.log(value + ' SIGNUP SUBMIT ');
    this.checkPasswords(
      this.signupForm.controls.password,
      this.signupForm.controls.confirmPassword
    );
    if (
      !this.signupForm.controls.password.errors.passwordMismatch ||
      this.signupForm.controls.password.errors.shortPassword
    ) {
      let answer = this.generatorService.createModel(
        new Model('competitor', value)
      );
      answer.subscribe((answer) => {
        //snackbar created profile or not and then navigate depending on the result
      });
    } else {
      //passwords dont match
    }
  }
  showGymForm() {
    this.gymBool = !this.gymBool;
  }
  login() {
    this.router.navigate(['/login']);
  }
  createGym() {
    //add gym to gymlocations table then update options
    //also check if the gym already exists
    let gymName = this.signupForm.controls.gymName.value;
    let gymAddress = this.signupForm.controls.gymAddress.value;

    let returnObs = this.generatorService.createModel(
      new Model('location', { gymName: gymName, gymAddress: gymAddress })
    );
    returnObs.subscribe((answer) => {
      //location created or not then update the select options
      console.log(answer);
    });
  }
  checkPasswords(password, sPassword) {
    if (password !== sPassword) {
      this.signupForm.controls.password.errors.passwordMismatch = true;
    } else if (password.length < 8) {
      this.signupForm.controls.password.errors.shortPassword = true;
    }
  }
}
