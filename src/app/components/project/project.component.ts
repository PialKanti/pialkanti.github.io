import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { faLaptopCode, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { DateUtils } from 'src/app/utils/DateUtils';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  private dateFormat: string = 'MMMM y';
  faLaptopCode = faLaptopCode;
  faCalendarAlt = faCalendarAlt;

  @Input()
  project: Project = new Project();

  constructor() {}

  ngOnInit(): void {}

  get startDate() {
    return DateUtils.getFormattedDate(
      this.project.startDateTime,
      this.dateFormat
    );
  }
  get endDate() {
    return this.project.endDateTime
      ? DateUtils.getFormattedDate(this.project.endDateTime, this.dateFormat)
      : '';
  }
}
