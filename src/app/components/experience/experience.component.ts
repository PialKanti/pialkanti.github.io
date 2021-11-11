import { Component, Input, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/models/JobExperience';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input()
  jobExperience: JobExperience = new JobExperience();

  constructor() { }

  ngOnInit(): void {
  }

}
