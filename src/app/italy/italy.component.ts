import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['./italy.component.scss']
})
export class ItalyComponent implements OnInit {

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  public getCountryDetail() {
    // this.apiService.getCountryDetail().subscribe((response) => {
    //   this.covid19All = response;
    // });
  }

}
