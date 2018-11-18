import { Component, OnInit } from '@angular/core';
import { BetsApiService } from './../../core/bets-api.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {
  bets = [];

  constructor(private betsApiService: BetsApiService) { }

  ngOnInit() {
    this.betsApiService.getBets()
      .subscribe(data => {
        this.bets = data.data.docs;
        console.log(data.data.docs, 'dd')
      })
  }

}
