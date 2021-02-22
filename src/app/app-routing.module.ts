import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HomeComponent } from './home/home.component';
import { ItalyComponent } from './italy/italy.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'italy', component: ItalyComponent },
  { path: 'country-detail/:country', component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
