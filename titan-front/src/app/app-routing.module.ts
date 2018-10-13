import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetListComponent } from './bets/bet-list/bet-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/bet-list',
    pathMatch: 'full'
  },
  {
    path: 'bet-list',
    component: BetListComponent
  },
  {
    path: '**',
    component: BetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
