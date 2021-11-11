import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Projects';

@Component({
  selector: 'project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.css']
})
export class ProjectTypeComponent implements OnInit {
  @Input()
  projects: Project[] = [];
  @Input()
  type:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
