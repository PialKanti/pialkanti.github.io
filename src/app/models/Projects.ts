import { ProjectType } from "../enums/ProjectType";

export class Project{
    name: string = "";
    start: string = "";
    end?: string = "";
    type: ProjectType = ProjectType.Personal;
    achievements: string[] = [];
    technologies: string[] = [];
    urlText: string = "";
    projectUrl: string = "";

    constructor(project?: Project){
        if(project != null){
            this.name = project.name;
            this.start = project.start;
            this.end = project.end;
            this.type = project.type;
            this.achievements = project.achievements;
            this.technologies = project.technologies;
            this.urlText = project.urlText;
            this.projectUrl = project.projectUrl;
        }
    }
}