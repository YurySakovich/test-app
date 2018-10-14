import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BetsApiService } from './../../core/bets-api.service';

@Component({
  selector: 'app-bet-add',
  templateUrl: './bet-add.component.html',
  styleUrls: ['./bet-add.component.scss']
})
export class BetAddComponent implements OnInit {
  addBetForm: FormGroup;
  _type;

  @Input() set type(type) {
    console.log(type);
    this._type = type;
  };

  get type() {
    return this._type;
  }

  constructor(private formBuilder: FormBuilder,
              private betsApiService: BetsApiService) { }

  ngOnInit() {
    this.addBetForm = this.createFormGroupWithBuilder();
  }

  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      date: '',
      name: '',
      oraganizationName: '',
      kindOfSport: '',
      liga: '',
      spec: '',
      kaf: '',
      status: '',
      profit: '',
      betAmount: '',
      currency: '',
      type: '',
      subBets: []
    })
  }

  onSubmit() {
    console.log(this.addBetForm.value, 'add bet')
    this.betsApiService.createBet(this.addBetForm.value)
    .subscribe(data => {
      console.log(data, 'data')
    })
  }
}
