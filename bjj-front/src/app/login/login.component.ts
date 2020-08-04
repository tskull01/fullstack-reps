import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrentService } from '../current.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //either login or create a new user
  //check competitor table for login info
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private currentService: CurrentService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    let returnObs = this.loginService.checkLogin(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    returnObs.subscribe((answer: any) => {
      if (answer) {
        console.log('logging in');
        this.currentService.currentUser.next(answer);
      } else {
        //login failed
        if (answer === false) {
          //Password incorrect
          console.log('Password incorrect');
        } else {
          //USer not found
          console.log('User not found');
        }
      }
    });
  }
  signup() {
    this.router.navigate(['/signup']);
  }
}
