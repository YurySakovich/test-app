import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BetListComponent } from './bets/bet-list/bet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BetListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
