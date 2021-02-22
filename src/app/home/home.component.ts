import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { GlobalCovidData } from 'src/models/global-covid-data.model';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('dt') table: Table;

  public globalCovidData: GlobalCovidData[];
  public loading: boolean = true;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCovidData().subscribe((response) => {
      this.globalCovidData = response;
      this.loading = false;
    });
  }

  filterGlobal(event: any) {
    const value = event.target.value;
    this.table.filter(value, 'country', 'contains');
  }

}
