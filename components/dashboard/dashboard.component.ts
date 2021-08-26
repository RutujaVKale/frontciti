import { SavetockService } from './../../services/savetock.service';
import { StocksService } from './../../services/stocks.service';
import { Component, OnInit } from '@angular/core';
import {StockInfo} from 'src/app/StockInfo';
import {stocktosave} from 'src/app/stocktosave';
import { LoginComponent } from '../login/login.component';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    StocksArray!: StockInfo[]; 

  stockdata: stocktosave = new stocktosave();
  

  constructor(private stockService: StocksService,
    private savethestockservice : SavetockService,
    private loginComponent:LoginComponent,
    private toaster:ToastrService
    
    ) { }

  ngOnInit(): void {
     this.getLargeCapStocks()
  }
     
  getLargeCapStocks(){
    this.stockService.LargeCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )     
 }
  getMidCapStocks(){   
    this.stockService.MidCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )       
  }
  getSmallCapStocks(){
 this.stockService.SmallCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
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

 // when user clicks button to see the stocks saved by him
   savedStocks(){
    console.log("savedstock called");  
    
    this.stockService.getSavedStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )
    
}

}
