import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Projects';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project = new Project();
  
  constructor() { }

  ngOnInit(): void {
  }

}
