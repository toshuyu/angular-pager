import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    document.title = 'page3';
  }
  routeToPage2() {
    this.location.back();
    // this.router.navigate(['/page2'], { replaceUrl: false });
  }
}
