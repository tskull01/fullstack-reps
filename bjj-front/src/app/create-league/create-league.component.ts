import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css'],
})
export class CreateLeagueComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  returnHome() {
    this.router.navigate(['']);
  }
}
