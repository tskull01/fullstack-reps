import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import GymLocation from '../classes/gymlocation';
import { Router } from '@angular/router';
import { GeneratorService } from '../generator.service';
import Model from '../classes/model';
import { WorkerService } from '../worker.service';
import { AsyncSubject } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { CurrentService } from '../current.service';
import { LoginService } from '../login.service';

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
  gymNames: string[];
  @ViewChild('auto') autoComplete: MatAutocomplete;
  passwordMismatch: boolean = true;
  selectedGym: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private workerService: WorkerService,
    private currentService: CurrentService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      first: [null, [Validators.required]],
      last: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      weight: [null, [Validators.required, Validators.maxLength(3)]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      homeGym: [null, Validators.required],
    });
    this.workerService.returnAllModel('location').subscribe((answer: any) => {
      console.log(JSON.stringify(answer) + 'updating locations');
      this.gyms = answer.data;
      this.gymNames = this.gyms.map((gym) => gym.gymName);
      console.log(this.gymNames);
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.autoComplete.optionSelected.subscribe((event) => {
      this.selectedGym = this.gyms.map((gym) => {
        if (this.signupForm.controls.homeGym.value === gym.gymName) {
          return gym._id;
        }
      })[0];
    });
  }
  submit(value) {
    // process form data and create new competitor
    //and add to competitor table
    //seperate gym and competitor data
    console.log(JSON.stringify(value) + ' SIGNUP SUBMIT ');
    let passwordCheck = this.checkPasswords(
      this.signupForm.controls.password.value,
      this.signupForm.controls.confirmPassword.value
    );
    passwordCheck.subscribe((checked) => {
      console.log(checked + ' CHECKED PASSWORD');
      let signupControl = this.signupForm.controls;

      if (checked) {
        let newCompetitor = {
          firstName: signupControl.first.value,
          lastName: signupControl.last.value,
          email: signupControl.email.value,
          password: signupControl.password.value,
          homeGym: this.selectedGym,
          weight: signupControl.weight.value,
        };
        let answer = this.loginService.signupSubmit(newCompetitor);
        answer.subscribe((answer: any) => {
          //snackbar created profile or not and then navigate depending on the
          if (answer) {
            this.currentService.currentUser.next(answer);
          } else {
            //User exists
            console.log('user exists');
          }
        });
      } else {
        //password failed snackbar
        console.log('passwords dont match');
      }
    });
  }
  showGymForm() {
    this.gymBool = !this.gymBool;
  }
  login() {
    this.router.navigate(['/login']);
  }
  checkPasswords(password, sPassword) {
    console.log(`Password 1 ${password} Password 2 ${sPassword}`);
    let passSub = new AsyncSubject<boolean>();
    if (password !== sPassword) {
      console.log('passwords dont match');
      this.passwordMismatch = true;
      passSub.next(false);
      passSub.complete();
    } else {
      this.passwordMismatch = false;
      passSub.next(true);
      passSub.complete();
    }
    return passSub;
  }
  returnGymForm(event) {
    event
      ? this.workerService
          .returnAllModel('location')
          .subscribe((answer: any) => {
            console.log(answer + 'updating locations');
            this.gyms = answer.data.map((gym) => gym.gymName);
            this.showGymForm();
          })
      : this.showGymForm();
  }
}
