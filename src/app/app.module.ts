import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { FunctionsComponent } from './functions/functions.component';
import { HistoryComponent } from './history/history.component';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailFormComponent,
    NavbarComponent,
    BrandListComponent,
    OurTeamComponent,
    FunctionsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // Use ReactiveFormsModule here
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
