import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BetsApiService } from './bets-api.service';

const services: any[] = [
    BetsApiService
];

const modules: any[] = [
  RouterModule,
  HttpClientModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [],
  exports: [],
  providers: [
    ...services
  ]
})

export class CoreModule {
}
