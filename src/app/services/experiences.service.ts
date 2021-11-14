import { Injectable } from '@angular/core';
import { JobExperience } from '../models/JobExperience';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  experiences: JobExperience[] = [];

  constructor() {}

  getExperiences() {
    if (this.experiences.length > 0) {
      return this.experiences;
    }
    //SRBD
    let srbd = new JobExperience();
    srbd.company = 'Samsung R&D Institute Bangladesh LTD. (SRBD)';
    srbd.position = 'Software Engineer';
    srbd.address = '111, Bir Uttam CR Dutta Rd, Dhaka-1205';
    srbd.start = 'Apr 2018';
    srbd.end = 'Present';
    srbd.jobs = [
      'Developed applications for windows platform using UWP framework which uses .NET Classes and WinRT APIs',
      'Integrated data sync functionalities with mobile platforms for giving Multi-Device experience to users',
      'Developed customized and responsive UI layouts for different screen size devices in windows platform',
      'Worked on SDK development using C# and C++/WinRT',
      'Wrote unit test case for UWP applications',
    ];
    srbd.techonologies = ['C#', 'C++/WinRT', 'Xaml', 'UWP'];
    this.experiences.push(srbd);

    //ng solutions
    let ng = new JobExperience();
    ng.company = 'NG Solutions System Limited';
    ng.position = 'Junior Software Engineer';
    ng.address = 'House: 554, Road: 9, Adabor Main Rd, Dhaka 1207';
    ng.start = 'Jul 2017';
    ng.end = 'Apr 2018';
    ng.jobs = [
      'Designed and developed web applications using PHP based Laravel framework',
      'Used HTML, Bootstrap and Vue.js build to build web interfaces',
    ];
    ng.techonologies = ['PHP', 'Laravel', 'Vue.js', 'Bootstrap'];
    this.experiences.push(ng);

    return this.experiences;
  }
}
