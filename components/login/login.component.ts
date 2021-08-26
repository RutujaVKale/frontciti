import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService,  private toaster:ToastrService) { }

  ngOnInit(): void {
  }

  oyy(){
      this.toaster.success("Your Stock is Saved Successfully!","Message")

  }

   OnSubmit() {
    console.log("form submitted");
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      console.log("submitting");
      // console.log(this.credentials.username+"   "+this.credentials.password);
      //generate token
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          console.log(response.token);
          this.loginService.loginUser(response.token);
          localStorage.setItem("username", this.credentials.username);
          console.log(localStorage.getItem("username"));
          window.location.href = "/largenifty";
        },
        error => {
          console.log(error);
          alert("User Not Registered");
        }
      )
    } else {
      alert("Fields cannot be empty!!");
    }
  }

}
