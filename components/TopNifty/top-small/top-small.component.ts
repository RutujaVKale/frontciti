import { Component, OnInit } from '@angular/core';
import { SavetockService } from 'src/app/services/savetock.service';
import { StocksService } from 'src/app/services/stocks.service';
import { StockInfo } from 'src/app/StockInfo';
import { stocktosave } from 'src/app/stocktosave';

@Component({
  selector: 'app-top-small',
  templateUrl: './top-small.component.html',
  styleUrls: ['./top-small.component.css']
})
export class TopSmallComponent implements OnInit {

  StocksArray!: StockInfo[]; 
    stockdata: stocktosave = new stocktosave();
    isTop=false;
    isLoading=true;
  constructor(private stockService: StocksService,
    private savethestockservice : SavetockService) { }

  ngOnInit(): void {
    this.isTop=true;
    this.getTopSmallCapStocks();
  }

   
  getTopSmallCapStocks(){
 this.stockService.TopSmallCapStocks().subscribe(
    resultArray=> (this.StocksArray = resultArray,  this.isLoading=false),   
    error => console.log("error "+error)  
    )   
  }

   saveStock(out: any ){
    //console.log(out);
    localStorage.setItem("top","true");
    var data=out.companySymbol;
    //console.log(data);
    var name = localStorage.getItem("username");
    this.stockdata.username = name;
    this.stockdata.stockname = data;
    
   // console.log("current :"+name+"company: "+data);
    console.log(this.stockdata);
    this.savethestockservice.saveStock(this.stockdata);  
    // this.toaster.success("Your Stock is Saved Successfully!","Message")
    alert("Stock Saved Successfully!!");
  }

}
