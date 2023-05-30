import { Component, Input, OnInit } from '@angular/core';
import {
  faBriefcase,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Experience } from 'src/app/models/Experience';
import { DateUtils } from 'src/app/utils/DateUtils';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  private dateFormat: string = 'MMMM y';

  faBriefcase = faBriefcase;
  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;

  @Input()
  experience: Experience = new Experience();

  constructor() {}

  ngOnInit(): void {}

  get startDate() {
    return DateUtils.getFormattedDate(
      this.experience.startDateTime,
      this.dateFormat
    );
  }
  get endDate() {
    return this.experience.endDateTime
      ? DateUtils.getFormattedDate(this.experience.endDateTime, this.dateFormat)
      : 'Present';
  }
}
