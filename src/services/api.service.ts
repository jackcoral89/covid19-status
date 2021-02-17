import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GlobalCovidData } from 'src/models/global-covid-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  public getCovidData(): Observable<GlobalCovidData[]> {
    return this.httpClient.get<GlobalCovidData[]>(environment.API_URL);
  }

}
