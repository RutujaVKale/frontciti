import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { StockInfo } from 'src/app/StockInfo';
import { stocktosave } from 'src/app/stocktosave';
import { SavetockService } from './../../services/savetock.service';

@Component({
  selector: 'app-saved-stock-by-user',
  templateUrl: './saved-stock-by-user.component.html',
  styleUrls: ['./saved-stock-by-user.component.css']
})
export class SavedStockByUserComponent implements OnInit {

    StocksArray!: StockInfo[]; 
     stockdata: stocktosave = new stocktosave();
    
  constructor(private stockService: StocksService,
      private savethestockservice : SavetockService) { }

  ngOnInit(): void {
    this.savedStocks()
  }

  
 // when user clicks button to see the stocks saved by him
   savedStocks(){
    console.log("savedstock called");  
    
    this.stockService.getSavedStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )   
}

 deleteStock(out: any ){
    //console.log(out);
    localStorage.setItem("top","true");
    var data=out.companySymbol;
    //console.log(data);
    var name = localStorage.getItem("username");
    this.stockdata.username = name;
    this.stockdata.stockname = data;
    
   // console.log("current :"+name+"company: "+data);
    console.log(this.stockdata);
    this.savethestockservice.deleteStock(this.stockdata);  
    alert("Stock deleted Successfully!!");
    window.location.reload();
    
  }
}
