import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BetListComponent } from './bets/bet-list/bet-list.component';
import { BetAddComponent } from './bets/bet-add/bet-add.component';
import { BetsComponent } from './bets/bets/bets.component';
import { MenuComponent } from './bets/menu/menu.component';

const components: any[] = [
  BetListComponent,
  BetAddComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    BetsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
