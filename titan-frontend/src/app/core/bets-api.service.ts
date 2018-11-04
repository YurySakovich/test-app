import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import Bet from '../models/bet.model';

@Injectable()
export class BetsApiService {
  public readonly clientRootUrl = environment.clientRootUrl;
  betUrl = `${this.clientRootUrl}api/bets`;

  constructor(private http: HttpClient) {
  }

  public getBets(): Observable<any> {
    return this.http.get(`${this.betUrl}`);
  }

  public createBet(bet: Bet): Observable<any> {
    return this.http.post(`${this.betUrl}`, bet);
  }

  public updateBet(bet: Bet): Observable<any> {
    return this.http.put(`${this.betUrl}`, bet);
  }

  public removeBet(id: Number): Observable<any> {
    return this.http.delete(`${this.betUrl}/${id}`);
  }

  public getLigs() {
    return of(['ЧБ', 'ЧР']);
  }

}
