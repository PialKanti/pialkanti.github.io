import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = new Map();
  constructor(private httpClient: HttpClient) {}

  public getExperiences(type: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/projects/type/${type}`);
  }
}
