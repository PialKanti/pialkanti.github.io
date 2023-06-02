import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  loading: boolean = false;
  experieneces: Experience[] = [];

  constructor(private service: ExperiencesService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.service.getExperiences().subscribe((data) => {
      this.loading = false;
      this.experieneces = data;
    });
  }
}
