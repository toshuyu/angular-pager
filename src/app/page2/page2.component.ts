import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    document.title = 'page2';
  }
  routeToPage1() {
    this.location.back();
    // this.router.navigate(['/page1'], { replaceUrl: false });
  }
  routeToPage3() {
    this.router.navigate(['/page3'], { replaceUrl: false });
  }
}
