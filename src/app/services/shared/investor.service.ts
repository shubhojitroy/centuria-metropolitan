import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {
  getInvestors() {
    return INVESTORS;
  }
  constructor() { }
}

const INVESTORS = [
  {
    'Holder': 'BoardRoom',
    'HolderDetails': 'Lvl 12 Grosvenor Place 225 George Street Sydney 2000',
    'investorId': 12345,
    'Address1': 'BoardRoom',
    'Address2': 'Lvl 12',
    'Address3': 'Grosvenor Place',
    'Address4': '225 George Street',
    'Address5': 'Sydney',
    'Address6': '2000',
    'Mobile': '0414-123-123',
    'Phone': '(02) 9991-2345',
    'SharePrice': 2.43,
    'TotalPrice': 100.0,
    'AvailableShares': 300,
    'Crn': 60007176823,
    'BillerCode': 27870,
    'EntitlementNumber': 60007176823,
    'Ok': true,
    'SessionId': 'ABC123',
    'Message': 'This is the error message'
  }
];
