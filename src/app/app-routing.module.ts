import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { FunctionsComponent } from './functions/functions.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'send-email', component: EmailFormComponent },
  { path: 'brands', component: BrandListComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'functions', component: FunctionsComponent },
  { path: 'history', component: HistoryComponent },
  {path: '**', component: HomeComponent, pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
