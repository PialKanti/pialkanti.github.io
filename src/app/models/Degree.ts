import { Institution } from './Institution';

export class Degree {
  name: string = '';
  institution: Institution = new Institution();
  startDateTime: Date = new Date();
  endDateTime: Date = new Date();
}
