import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectType } from 'src/app/enums/ProjectType';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  tabId: number = 0;
  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.tabChange(0);
  }

  tabChange(id: number) {
    this.tabId = id;
    const type: ProjectType = id;
    this.projects = [];
    this.service
      .getExperiences(ProjectType[type])
      .subscribe((response: any[]) => {
        console.log(response);
        this.projects = response;
      });
  }
}
