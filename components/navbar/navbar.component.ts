import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { StockInfo } from 'src/app/StockInfo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  StocksArray!: StockInfo[];
  get user(): any {
    return localStorage.getItem("username");
  }

  constructor(private loginService: LoginService,
    private stockService: StocksService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    location.reload();

  }

  // when user clicks button to see the stocks saved by him
  savedStocks() {
    console.log("savedstock called");

    this.stockService.getSavedStocks().subscribe(
      resultArray => this.StocksArray = resultArray,
      error => console.log("error " + error)
    )

  }

}
