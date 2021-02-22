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

  // GET /v3/covid-19/countries/
  public getCovidData(): Observable<GlobalCovidData[]> {
    return this.httpClient.get<GlobalCovidData[]>(environment.API_URL + 'v3/covid-19/countries/');
  }

  // GET /v3/covid-19/all
  public getCovid19All(): Observable<Covid19All> {
    return this.httpClient.get<Covid19All>(environment.API_URL + 'v3/covid-19/all/');
  }

  // GET /v3/covid-19/countries/{country}
  public getCountryDetail(country: string): Observable<GlobalCovidData> {
    return this.httpClient.get<GlobalCovidData>(environment.API_URL + 'v3/covid-19/countries/' + { country });
  }

}
