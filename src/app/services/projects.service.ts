import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProjectType } from '../enums/ProjectType';
import { Project } from '../models/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = new Map();
  constructor() { }

  getProjects(){
    if(this.projects.size > 0){
      return this.projects;
    }

    this.projects.set(ProjectType.Professional, this.getProjectsFromType(ProjectType.Professional));
    this.projects.set(ProjectType.Academic, this.getProjectsFromType(ProjectType.Academic));
    this.projects.set(ProjectType.Personal, this.getProjectsFromType(ProjectType.Personal));

    return this.projects;
  }

  getProjectsFromType(type: ProjectType){
    let projects: Project[] = [];
    if(type == ProjectType.Professional)
    {
      projects.push(new Project({name: "Samsung Notes (Windows)", start: "2019", end: "Present", type: ProjectType.Professional, 
      achievements: ["In charge of several modules and engaged in development from scratch to commercialization",
                    "Worked on continuous data sync between multiple devices, developed adaptive UI controls",
                  "Worked on SDK development using C# and C++/WinRT"],
      technologies: ["C#", "C++/WinRT", "Xaml", "UWP"],
      urlText: "See in Microsoft store",
      projectUrl: "https://www.microsoft.com/en-us/p/samsung-notes/9nblggh43vhv"}));

      projects.push(new Project({name: "Call & Message Continuity (CMC)", start: "2018", end: "2019", type: ProjectType.Professional, 
      achievements: ["Developed Call sync feature to give users multi-device experience",
                    "Implemented call pull scenarios between two or more devices",
                  "Wrote unit test for windows UWP application"],
      technologies: ["C#", "C++/WinRT", "Xaml", "UWP"],
      urlText: "About CMC",
      projectUrl: "https://www.samsung.com/uk/support/mobile-devices/call-and-message-continuity/"}));
    }
    else if(type == ProjectType.Academic){
      projects.push(new Project({name: "Shooting Balloon", start: "Jan 2017", type: ProjectType.Academic, 
      achievements: ["A simple strategy game built with OpenGL. At the start of the game, balloons move bottom to up of the screen. If user can hit a balloon with a arrow score will be count. But if a balloon crosses upmost part of the screen life reduces. Total 10 life will be given."],
      technologies: ["C++", "Opengl 3.0"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/Shooting-Balloon"}));

      projects.push(new Project({name: "3D-Room", start: "Dec 2016", type: ProjectType.Academic, 
      achievements: ["This is simple 3D room design using opengl in c++."],
      technologies: ["C++", "Opengl 3.0"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/3D-Room"}));

      projects.push(new Project({name: "Instant Book Reviewer", start: "Oct 2015", type: ProjectType.Academic, 
      achievements: ["An android application which app which can give real time reviews from internet by simply capturing a book’s cover.User can capture picture of book cover through Book Judge and it can get text from the captured image using Google Tesseract. Then we are getting reviews from Goodreads.com which is quite popular to the book-lovers."],
      technologies: ["Java", "Android", "OCR(Tesseract)", "Image Processing(OpenCV)"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/Instant-Book-Reviewer"}));

      projects.push(new Project({name: "LAN-Messenger", start: "Apr 2013", type: ProjectType.Academic, 
      achievements: ["A java based desktop application which can connect a group of clients at a time."],
      technologies: ["Java", "Swing(Java)", "Socket Programming"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/LAN-Messenger"}));
    }
    else if(type == ProjectType.Personal)
    {
      projects.push(new Project({name: "Check Weather", start: "Jun 2017", type: ProjectType.Personal, 
      achievements: ["A simple weather app which can tell the weather forecast of different cities around the world."],
      technologies: ["Java", "Android", "HTTP library"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/CheckWeather"}));

      projects.push(new Project({name: "Online Banking System", start: "Jan 2017", end: "Feb 2017", type: ProjectType.Personal, 
      achievements: ["This project is aimed at developing an Online Banking for customer. The system is an online application that can be accessed throughout the organization and outside as well with proper login provided."],
      technologies: ["Java", "J2EE", "JavaScript", "Bootstrap"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/Online-Banking-System"}));

      projects.push(new Project({name: "বাংলায় প্রোগ্রামিং", start: "Nov 2016", end: "Feb 2017", type: ProjectType.Personal, 
      achievements: ["An offline tutorial application to learn popular programming languages. It has been published in google play store and has more than 10,000 downloads."],
      technologies: ["Java", "Android"],
      urlText: "Project Link",
      projectUrl: "https://play.google.com/store/apps/details?id=com.programminginbangla"}));

      projects.push(new Project({name: "Smile", start: "Apr 2016", type: ProjectType.Personal, 
      achievements: ["An android app to provide support and helpful resources during pregnancy. This app was developed during National Hackathon at 2016."],
      technologies: ["Java", "Android"],
      urlText: "Project Link",
      projectUrl: "https://github.com/Ash-ik/Smile"}));

      projects.push(new Project({name: "ক্ষুদেবার্তা (KhudeBarta)", start: "Aug 2015", type: ProjectType.Personal, 
      achievements: ["An android app to send 7 bit Character Encoded compressed Bangla SMS for sending 56.25% more Bangla characters."],
      technologies: ["Java", "Android", "Character Encoding"],
      urlText: "Project Link",
      projectUrl: "https://github.com/Ash-ik/KhudeBarta"}));

      projects.push(new Project({name: "AgeCalculator", start: "Feb 2013", type: ProjectType.Personal, 
      achievements: ["A simple app which can calculate age from your birth date."],
      technologies: ["Java", "Android"],
      urlText: "Project Link",
      projectUrl: "https://github.com/PialKanti/AgeCalculator"}));
    }
    return projects;
  }
}
