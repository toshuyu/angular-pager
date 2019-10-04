import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  routeToPage1() {
    this.router.navigate(['/page1']);
  }
}
