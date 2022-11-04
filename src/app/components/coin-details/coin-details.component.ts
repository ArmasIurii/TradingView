import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinListService } from 'src/app/service/coin-list.service';
import {ChartConfiguration, ChartType} from 'chart.js';
import { BaseChartDirective} from 'ng2-charts'


@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {

  coinId!: string;
  days : number = 30;

  detailedCoin:any;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',

      }
    ],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;


  constructor(private _service: CoinListService, private activatedRoute: ActivatedRoute) {

    
   }

  ngOnInit(): void {
 this.activatedRoute.params.subscribe(val => {
      this.coinId = val['id']
    })

this._service.getCurrencyById(this.coinId).subscribe( val => {
  this.detailedCoin = val 
  this.getGraphData(30)
    })
    
    
  }

  getGraphData(days:number){
    this.days = days
    this._service.getGrpahicalCurrencyData(this.detailedCoin.id,30).subscribe(res => {

      this.lineChartData.datasets[0].data = res.prices.map((a:any) => {
        return a[1]
      })
      this.lineChartData.labels = res.prices.map((a:any) => {
        let date = new Date(a[0])
        let time = date.getHours() > 12 ? 
        `${date.getHours()-12}: ${date.getMinutes()} PM` :
        `${date.getHours()}: ${date.getMinutes()} AM`
        return this.days === 1 ? time :date.toLocaleDateString()
      })
    })
  }

}
