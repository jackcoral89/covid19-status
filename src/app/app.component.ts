import { Component, ViewChild } from '@angular/core';
import { GlobalCovidData } from 'src/models/global-covid-data.model';
import { ApiService } from 'src/services/api.service';
import { Table } from 'primeng/table';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dt') table: Table;

  public globalCovidData: GlobalCovidData[];
  public loading: boolean = true;
  public menuItems: MenuItem[];

  constructor(
    private primengConfig: PrimeNGConfig,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.apiService.getCovidData().subscribe((response) => {
      this.globalCovidData = response;
      this.loading = false;
    });

    this.menuItems = [
      {
        label: 'Home',
        url: '/',
        icon: 'pi pi-fw pi-home' 
      },
      {
        label: 'Italy'
      }
    ];
  }

}
