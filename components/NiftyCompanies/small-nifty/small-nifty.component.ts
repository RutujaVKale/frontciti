import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SavetockService } from 'src/app/services/savetock.service';
import { StocksService } from 'src/app/services/stocks.service';
import { StockInfo } from 'src/app/StockInfo';
import { stocktosave } from 'src/app/stocktosave';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-small-nifty',
  templateUrl: './small-nifty.component.html',
  styleUrls: ['./small-nifty.component.css']
})
export class SmallNiftyComponent implements OnInit {
  StocksArray!: StockInfo[]; 

  stockdata: stocktosave = new stocktosave();
  

  constructor(private stockService: StocksService,
    private savethestockservice : SavetockService,
    private loginComponent:LoginComponent,
    private toaster:ToastrService
    
    ) { }

    ngOnInit(): void {
     this.getSmallCapStocks()
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

}
