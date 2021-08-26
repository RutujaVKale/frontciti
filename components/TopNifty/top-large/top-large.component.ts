import { Component, OnInit } from '@angular/core';
import { SavetockService } from 'src/app/services/savetock.service';
import { StocksService } from 'src/app/services/stocks.service';
import { StockInfo } from 'src/app/StockInfo';

@Component({
  selector: 'app-top-large',
  templateUrl: './top-large.component.html',
  styleUrls: ['./top-large.component.css']
})
export class TopLargeComponent implements OnInit {

 StocksArray!: StockInfo[]; 
    isTop=false;
    isLoading=true;
  stockdata: any;
  
  constructor(private stockService: StocksService,
    private savethestockservice : SavetockService,) { }

  ngOnInit(): void {
    this.isTop=true;
    this.getTopLargeCapStocks();
  }

   getTopLargeCapStocks(){
    this.stockService.TopLargeCapStocks().subscribe(
    resultArray=> (this.StocksArray = resultArray, this.isLoading=false), 
    error => console.log("error "+error)  
    )     
 }

//saving stock
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


