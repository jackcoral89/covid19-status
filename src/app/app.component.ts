import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.menuItems = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-fw pi-home' 
      },
      {
        label: 'Italy',
        routerLink: '/italy'
      }
    ];
  }

}
