import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-navigation',
  templateUrl: './projects-navigation.component.html',
  styleUrls: ['./projects-navigation.component.scss'],
})
export class ProjectsNavigationComponent implements OnInit {
  currentRoute: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentRoute = this.route.snapshot.data.url;
  }
}
