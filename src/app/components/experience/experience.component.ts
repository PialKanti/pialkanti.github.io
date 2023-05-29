import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  faBriefcase,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/models/Experience';

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
  experience: Experience = new Experience();

  constructor() {}

  ngOnInit(): void {}

  get startDate() {
    let pipe: DatePipe = new DatePipe('en-US');
    return pipe.transform(this.experience.startDateTime, 'MMMM y');
  }
  get endDate() {
    return this.experience.endDateTime
      ? this.experience.endDateTime
      : 'Present';
  }
}
