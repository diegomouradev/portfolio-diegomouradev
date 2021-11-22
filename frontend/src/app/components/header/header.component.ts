import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentRouteComponent: any = '';
  isNavActive: boolean = false;
  toggleColor: object;
  animateToggle: boolean = false;
  constructor(private route: ActivatedRoute) {
    this.currentRouteComponent = this.route.snapshot.data.urlPath;
  }

  ngOnInit(): void {
    this.toggleColor = {
      color: this.isNavActive ? '#0b60c1' : '#2786f5',
    };
    this.highlightToggle();
  }

  highlightToggle(): void {
    this.animateToggle = true;
  }

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
    this.toggleColor = {
      color: this.isNavActive ? '#0b60c1' : '#2786f5',
    };
  }
}
