import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Projects';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  faFolderOpen = faFolderOpen;

  @Input()
  project: Project = new Project();
  
  constructor() { }

  ngOnInit(): void {
  }

}
