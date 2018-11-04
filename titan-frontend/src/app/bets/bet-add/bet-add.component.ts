import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { BetsApiService } from './../../core/bets-api.service';

@Component({
  selector: 'app-bet-add',
  templateUrl: './bet-add.component.html',
  styleUrls: ['./bet-add.component.scss']
})
export class BetAddComponent implements OnInit {
  addBetForm: FormGroup;
  _type;
  bets;
  bkNames = ['Marathon', 'PariMatch']
  currencyTypes = ['Рубли', 'Евро', 'Доллары']
  sportKinds = ['Футбол', 'Волейбол', 'Теннис', 'Бейсбол', 'Бадминтон', 'Баскетбол', 'Футзал', 'Гандбол', 'Хоккей', 'Хоккей на траве']

  @Input() set type(type) {
    if(this.addBetForm) {
      this.addBetForm.controls['type'].setValue(type);
    }
    this._type = type;
  };

  get type() {
    return this._type;
  }

  constructor(private formBuilder: FormBuilder,
              private betsApiService: BetsApiService) { }

  ngOnInit() {
    this.addBetForm = this.createFormGroupWithBuilder();
    this.bets = this.addBetForm.get('subBets') as FormArray;
    console.log(this.formBuilder)
  }

  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      date: '',
      name: 'Иван',
      oraganizationName: this.bkNames[0],
      kindOfSport: this.sportKinds[0],
      liga: '',
      spec: '',
      kaf: '1.',
      status:true ,
      profit: '',
      betAmount: '',
      currency: this.currencyTypes[0],
      type: this._type,
      subBets: this.formBuilder.array([])
    })
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      // date: '',
      // name: '',
      // oraganizationName: '',
      kindOfSport: this.sportKinds[0],
      liga: '',
      spec: '',
      kaf: '1.',
      status: true,
      // profit: '',
      // betAmount: '',
      // currency: '',
      // type: '',
    });
  }

  onChange(event) {

  }

  addItem(): void {
    this.bets = this.addBetForm.get('subBets') as FormArray;
    this.bets.push(this.createItem());
    console.log(this.bets)
  }

  onSubmit() {
    console.log(this.addBetForm.value, 'add bet')
    this.betsApiService.createBet(this.addBetForm.value)
    .subscribe(data => {
      console.log(data, 'data')
    })
  }
}
