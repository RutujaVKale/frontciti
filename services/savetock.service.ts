import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { stocktosave } from '../stocktosave';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SavetockService {

 constructor(private http:HttpClient,
    private logincompo : LoginComponent) { }

  saveStock(stockdata : stocktosave){
   // console.log("user "+stockdata.username+" stock: "+stockdata.stockname);
  //   console.log("logineduser "+this.logincompo.username);
    this.http.post(`http://localhost:8080/saveStock`,stockdata).toPromise().then(data=>{
      console.log(data);
    }).catch(error=>console.log(error.message));
    console.log("trying to send");
  }

  deleteStock(stockdata : stocktosave){
   // console.log("user "+stockdata.username+" stock: "+stockdata.stockname);
  //   console.log("logineduser "+this.logincompo.username);
  // let options=new RequestOptionsArgs({
  //   body:{
  //     username:stockdata.username,
  //     stockname:stockdata.stockname
  //   },
  //   method : RequestMethod.Delete
  // });
    this.http.request("Delete",`http://localhost:8080/deleteStock`,{body:{
      username:stockdata.username,
      stockname:stockdata.stockname
    }}).toPromise().then(data=>{
      console.log(data);
    }).catch(error=>console.log(error.message));
    console.log("trying to send");
  }
}
