import { ProjectLink } from './ProjectLink';

export class Project {
  name: string = '';
  type: string = '';
  projectLink: ProjectLink = new ProjectLink();
  descriptionList: string[] = [];
  technologies: string[] = [];
  startDateTime: Date = new Date();
  endDateTime: Date = new Date();
}
