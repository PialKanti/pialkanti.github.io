import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/models/Projects';

@Component({
  selector: 'project-type',
  templateUrl: './project-type.component.html',
  styleUrls: ['./project-type.component.css'],
})
export class ProjectTypeComponent implements OnInit {
  @Input()
  projects: Project[] = [];
  @Input()
  type: string = '';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Projects');
  }

  ngOnInit(): void {}
}
