import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StockInfo } from 'src/app/StockInfo';
import { LoginService } from 'src/app/services/login.service';
import { StocksService } from 'src/app/services/stocks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
    public loggedIn = false;
  StocksArray!: StockInfo[];
  get user(): any {
    return localStorage.getItem("username");
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private loginService: LoginService,
    private stockService: StocksService,private router : Router) {}

      ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
      // this.router.navigate('\largenifty');
      // this.router.navigate(['\largenifty']);
  }

  logoutUser() {
    this.loginService.logout();
  
  }

  // when user clicks button to see the stocks saved by him
  savedStocks() {
    console.log("savedstock called");

    this.stockService.getSavedStocks().subscribe(
      resultArray => this.StocksArray = resultArray,
      error => console.log("error " + error)
    )

  }


 getLargeCapStocks(){
    this.stockService.LargeCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )   
    alert("hello");  
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

}
