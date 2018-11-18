import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { BetsApiService } from './../../core/bets-api.service';
import { Observable, of } from 'rxjs';
import {  OnDestroy } from '@angular/core';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

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
  leagues = [];
  leagueValue= '';

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
    
    this.betsApiService.getLeagues()
      .subscribe(data => {
        this.leagues = data.data.docs;
      })

    this.addBetForm.controls['liga'].valueChanges
      .pipe(
        debounceTime(400),
        switchMap((data: any) => {
          return of(this.filterByValue(data))
        })
      )
      .subscribe((leagues: any) => {
        this.leagues = leagues;
      });

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
  }

  onSubmit() {
    this.betsApiService.createBet(this.addBetForm.value)
    .subscribe(data => {
      this.reset();
    }, err => {
      this.reset();
    })
  }

  reset() {
    this.addBetForm.controls['liga'].setValue('');
    this.addBetForm.controls['kindOfSport'].setValue(this.sportKinds[0]);
    this.addBetForm.controls['spec'].setValue('');
    this.addBetForm.controls['kaf'].setValue('1.');
    this.addBetForm.controls['status'].setValue(true);
    this.addBetForm.controls['betAmount'].setValue('');
    this.addBetForm.controls['profit'].setValue('');
  }

  private filterByValue(value: string): any[] {
    if (!value) {
      return this.leagues;
    }

    return this.leagues.filter((league) => {
      return _.includes(league.name.toLowerCase(), value.toLowerCase());
    });
  }
}
