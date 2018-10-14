import { Component, OnInit } from '@angular/core';
import { BetsApiService } from './../../core/bets-api.service';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.scss']
})
export class BetListComponent implements OnInit {
  bets: any[] = [];

  constructor(private betsApiService: BetsApiService) { }

  ngOnInit() {
    this.betsApiService.getBets()
      .subscribe(data => {
        this.bets = data.data;
        console.log(data)
      })
  }

}
