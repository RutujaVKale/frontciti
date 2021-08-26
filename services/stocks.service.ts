import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import {StockInfo} from '../StockInfo';
@Injectable({
  providedIn: 'root'
})
export class StocksService {

   constructor(private http : HttpClient,
    private logined : LoginComponent) { }

   LargeCapStocks(){    
     return this.http.get<StockInfo[]>('http://localhost:8080/getStocks/largeCap');
   }

    MidCapStocks(){
     
    return this.http.get<StockInfo[]>('http://localhost:8080/getStocks/midCap');
   }

    SmallCapStocks(){
     return this.http.get<StockInfo[]>('http://localhost:8080/getStocks/smallCap');
   }

   getSavedStocks(){
     console.log("calling..");
     // var name = sessionStorage.getItem("username");
     var name = localStorage.getItem("username");
     console.log("save for "+name);
      console.log("current user: "+name);
     return this.http.get<StockInfo[]>('http://localhost:8080/savedstock/'+name);
     
   }

   //top stocks
    TopLargeCapStocks(){
      console.log("micspbutton");
     return this.http.get<StockInfo[]>('http://localhost:8080/getTopStocks/largeCap');
   }

    TopMidCapStocks(){
       console.log("micspservice");
    return this.http.get<StockInfo[]>('http://localhost:8080/getTopStocks/midCap');
   }

    TopSmallCapStocks(){
     return this.http.get<StockInfo[]>('http://localhost:8080/getTopStocks/smallCap');
   }
}
