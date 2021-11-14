import { Component, Input, OnInit } from '@angular/core';
import { JobExperience } from 'src/app/models/JobExperience';
import {
  faBuilding,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  faBuilding = faBuilding;
  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;

  @Input()
  jobExperience: JobExperience = new JobExperience();

  constructor(private titleService: Title) {
    this.titleService.setTitle('Experiences');
  }

  ngOnInit(): void {}
}
