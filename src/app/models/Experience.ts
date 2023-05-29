import { Company } from './Company';

export class Experience {
  id: string = '';
  title: string = '';
  company: Company = new Company();
  employmentType: string = '';
  responsibilities: string[] = [];
  skills: string[] = [];
  startDateTime: Date = new Date();
  endDateTime: Date = new Date();
}
