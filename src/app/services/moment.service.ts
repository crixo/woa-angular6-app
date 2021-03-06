import { Injectable, Inject } from '@angular/core';

@Injectable()
export class MomentService {
  constructor(@Inject('moment') private moment) { }

  toLocalString(dateFromApi: any) {
    //console.log(dateFromApi);
    const m = this.moment(dateFromApi);
    //console.log(m);
    const localString = m.format('DD/MM/YYYY');
    //console.log(localString);
    return localString;
  }

  toApiString(localString: any) {
    const m = this.moment(localString, 'DD/MM/YYYY');
    //console.log(m);
    const apiString = m.format('YYYY-MM-DDTHH:mm:ss')
    //console.log(apiString);
    return apiString;
  }

  getToday() {
    const m = this.moment();
    //console.log(m);
    const localString = m.format('DD/MM/YYYY')
    //console.log(localString);
    return localString;
  }

  getUserAuthExpirationDate() {
    const m = this.moment();
    //const expirationDate = m.add(15,'days').toString();
    const expirationDate = m.add(15,'days').format()
    //console.log(expirationDate);
    return expirationDate;
  }  

  isUserAuthExpired(userAuthExpirationDate: string) {
    const m = this.moment(userAuthExpirationDate);
    const now = this.moment();
    return now.isAfter(m);
  }    
}