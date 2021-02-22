import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Covid19All, GlobalCovidData } from 'src/models/global-covid-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) { }

  // GET https://corona.lmao.ninja/v2/countries/
  public getCovidData(): Observable<GlobalCovidData[]> {
    return this.httpClient.get<GlobalCovidData[]>(environment.API_URL);
  }

  // GET /v3/covid-19/all
  public getCovid19All(): Observable<Covid19All> {
    return this.httpClient.get<Covid19All>(environment.BASE_URL + 'v3/covid-19/all');
  }

}
