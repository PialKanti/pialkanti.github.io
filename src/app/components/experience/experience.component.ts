import { Component, Input, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/models/JobExperience';
import {
  faBriefcase,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  faBriefcase = faBriefcase;
  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;

  @Input()
  jobExperience: JobExperience = new JobExperience();

  constructor() {}

  ngOnInit(): void {}
}
