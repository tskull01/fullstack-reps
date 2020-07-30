import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import League from '../classes/league';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
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
}
