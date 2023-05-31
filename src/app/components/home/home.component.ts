import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faGraduationCap,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { HomeService } from 'src/app/services/home.service';
import { Degree } from 'src/app/models/Degree';
import { DateUtils } from 'src/app/utils/DateUtils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGraduationCap = faGraduationCap;
  faMapMarkerAlt = faMapMarkerAlt;

  degrees: Degree[] = [];
  private dateFormat: string = 'y';

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.getDegrees().subscribe((data) => {
      this.degrees = data;
    });
  }

  formatDate(date: Date) {
    return DateUtils.getFormattedDate(date, this.dateFormat);
  }
}
