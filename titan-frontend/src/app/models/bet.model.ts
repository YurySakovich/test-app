class Bet {
  _id?: string;
  date?: Date;
  name?: string;
  oraganizationName: string;
  kindOfSport: string;
  liga: string;
  spec: string;
  kaf: Number;
  status: string;
  profit: Number;
  betAmount: Number;
  currency: string;
  type: string;
  subBets: Array<Bet>
  constructor(
  ){
    this.name = '';
    this.oraganizationName = '';
    this.date = new Date();
    this.status = '';
    this.liga = '';
    this.betAmount = 0;
    this.currency = '';
    this.profit = 0;
    this.status = '';
    this.kaf = 0;
    this.spec = '';
    this.type = 'single';
    this.subBets = [];
  }
}

export default Bet;