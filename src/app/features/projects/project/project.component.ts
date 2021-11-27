import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
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
