import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinListService {

  constructor(private _http: HttpClient) {

  }
  getAllCoin(){
    return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&sparkline=false`);
  }
  
  getCurrencyById(coinId:string){
    return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }

  getGrpahicalCurrencyData(coinId:string, days: number){
    return this._http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=USD&days=${days}`)
  }
}
