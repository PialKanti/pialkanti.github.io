import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  constructor(private httpClient: HttpClient) {}

  public getExperiences(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/experiences`);
  }
}
