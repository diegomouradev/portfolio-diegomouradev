import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  animationOn: boolean = false;
  currentRoute: string;

  constructor(private route: ActivatedRoute) {
    this.currentRoute = this.route.routeConfig.path;
  }

  ngOnInit(): void {
    this.animationOn = true;
  }
}
