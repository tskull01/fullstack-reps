import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import GymLocation from '../classes/gymlocation';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneratorService } from '../generator.service';
import Model from '../classes/model';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  gymForm: FormGroup;
  gymBool: boolean = false;
  gyms: GymLocation[] = [];
  passwordMismatch: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private generatorService: GeneratorService,
    private workerService: WorkerService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, Validators.required, Validators.minLength(8)],
      confirmPassword: [null, Validators.required, Validators.minLength(8)],
      homeGym: [null, Validators.required],
    });
    this.workerService.returnAllModel('location').subscribe((answer: any) => {
      console.log(answer);
      this.gyms = answer.data.map((gym) => gym.gymName);
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
      this.passwordMismatch ||
      !this.signupForm.controls.password.errors.shortPassword
    ) {
      let answer = this.generatorService.createModel(
        new Model('competitors', value)
      );
      answer.subscribe((answer) => {
        //snackbar created profile or not and then navigate depending on the result
      });
    } else {
      //passwords dont match
      console.log('passwords dont match');
    }
  }
  showGymForm() {
    this.gymBool = !this.gymBool;
  }
  login() {
    this.router.navigate(['/login']);
  }
  checkPasswords(password, sPassword) {
    console.log(`Password 1 ${password} Password 2 ${sPassword}`);
    console.log(this.signupForm.controls.password.errors);
    console.log(this.signupForm.controls);
    if (password !== sPassword) {
      this.passwordMismatch = true;
    } else {
      this.passwordMismatch = false;
    }
  }
}
