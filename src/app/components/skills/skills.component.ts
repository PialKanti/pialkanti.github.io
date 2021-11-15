import { Component, OnInit } from '@angular/core';
import {
  faList,
  faCube,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  faList = faList;
  faCube = faCube;
  faClipboardList = faClipboardList;

  constructor() {}

  ngOnInit(): void {}
}
