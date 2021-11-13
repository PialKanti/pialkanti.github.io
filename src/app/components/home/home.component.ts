import { Component, OnInit } from '@angular/core';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }

}
