import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  routeToPage2() {
    this.router.navigate(['/page2']);
  }
}
