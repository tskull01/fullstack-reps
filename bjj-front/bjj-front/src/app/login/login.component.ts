import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //either login or create a new user
  //check competitor table for login info
  loginForm: FormGroup;
  signup: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
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
    let returnObservable = this.loginService.checkLogin(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    // returnObservable.subscribe((answer) => {

    //});
  }
}
