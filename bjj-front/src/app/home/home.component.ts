import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import League from '../classes/league';
import { CurrentService } from '../current.service';
import { WorkerService } from '../worker.service';
import Competitor from '../classes/competitor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private currentService: CurrentService,
    private workerService: WorkerService
  ) {}
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  leagueForm: FormGroup;
  leagueNames: string[] = ['Tuesday Silver', 'Saturday Gold', 'Monday Copper'];
  leagueValue: string;
  leagues: League[];
  ngOnInit(): void {
    this.router.navigate(['']);
    this.leagueForm = new FormGroup({
      leagueSelection: new FormControl(this.leagueValue),
    });
    this.currentService.currentUser.subscribe((user: any) => {
      console.log(JSON.stringify(user) + 'home login');
      if (user) {
        this.router.navigate(['']);
        this.checkUserAdmin(user.data.email);
        this.loggedIn = true;
      } else {
        console.log('user null home component');
      }
    });
    this.currentService.isAdmin.subscribe((bool) => {
      console.log(bool + 'is admin');
      if (bool) {
        this.isAdmin = true;
      }
    });
  }
  login() {
    //Navigate to login screen and wait for response on is admin and logged in
    this.router.navigate(['/login']);
  }
  submit() {
    //select a league and go to league schedule view
  }
  createLeague() {
    //navigate to create league page
  }
  selectLeague(value) {
    //find one league via the input
  }
  checkUserAdmin(email) {
    let adminObs = this.workerService.getAdmin();
    adminObs.subscribe((adminArray: any) => {
      console.log(adminArray);
      adminArray.map((admin) => {
        console.log(admin + email);
        if (admin === email) {
          this.currentService.isAdmin.next(true);
        }
      });
    });
  }
}
