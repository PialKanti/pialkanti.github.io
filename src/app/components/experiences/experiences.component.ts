import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  experieneces: Experience[] = [];

  constructor(private service: ExperiencesService) {}

  ngOnInit(): void {
    this.service.getExperiences().subscribe((data) => {
      this.experieneces = data;
    });
  }
}
