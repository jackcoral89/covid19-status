import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Covid19All, GlobalCovidData } from 'src/models/global-covid-data.model';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('dt') table: Table;

  public globalCovidData: GlobalCovidData[];
  public covid19All: Covid19All;
  public loading: boolean = true;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.getCovidData();
    this.getCovid19All();
  }

  public filterGlobal(event: any) {
    const value = event.target.value;
    this.table.filter(value, 'country', 'contains');
  }

  public getCovidData() {
    this.apiService.getCovidData().subscribe((response) => {
      this.globalCovidData = response;
      this.loading = false;
    });
  }

  public getCovid19All() {
    this.apiService.getCovid19All().subscribe((response) => {
      this.covid19All = response;
    });
  }

}
