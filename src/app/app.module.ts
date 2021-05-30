import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LandingPageService } from './Services/landingPage.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './Components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChartComponent } from './Components/chart/chart.component';
import { PercentageboxComponent } from './Components/percentagebox/percentagebox.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TableComponent,
    ChartComponent,
    PercentageboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [LandingPageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
