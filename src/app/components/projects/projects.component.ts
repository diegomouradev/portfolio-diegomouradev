import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  currentRoute: string;
  animationOn: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.currentRoute = this.route.snapshot.data.project;
  }

  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.data.project;
    this.animationOn = true;
  }
}
