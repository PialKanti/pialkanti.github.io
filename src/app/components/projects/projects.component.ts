import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectType } from 'src/app/enums/ProjectType';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = new Map();

  constructor(service: ProjectsService) {
    this.projects = service.getProjects();
   }

  ngOnInit(): void {
  }

}
