class Bet {
  _id:string;
  name: String;
  description: String;
  date: Date;
  status: String;
  oraganizationName: String;
  betAmount: Number;
  userId: String;
  constructor(
  ){
    this.name = '';
    this.description = '';
    this.date = new Date();
    this.status = '';
    this.oraganizationName = ''
    this.betAmount = 0;
    this.userId = ''
  }
}

export default Bet;