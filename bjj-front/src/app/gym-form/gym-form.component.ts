import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneratorService } from '../generator.service';
import Model from '../classes/model';

@Component({
  selector: 'app-gym-form',
  templateUrl: './gym-form.component.html',
  styleUrls: ['./gym-form.component.css'],
})
export class GymFormComponent implements OnInit {
  gymForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private generatorService: GeneratorService
  ) {}

  ngOnInit(): void {
    this.gymForm = this.formBuilder.group({
      gymName: [null, [Validators.required]],
      street: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
    });
  }
  createGym() {
    //add gym to gymlocations table then update options
    //also check if the gym already exists
    let controls = this.gymForm.controls;
    let gym = {
      gymName: controls.gymName.value,
      street: controls.street.value,
      city: controls.city.value,
      state: controls.state.value,
      zip: controls.zip.value,
    };

    let returnObs = this.generatorService.createModel(
      new Model('locations', gym)
    );
    returnObs.subscribe((answer) => {
      //location created or not then update the select options
      console.log(answer);
    });
  }
}
