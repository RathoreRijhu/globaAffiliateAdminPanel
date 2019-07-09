import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { CookieService } from "ngx-cookie-service";
import {RouterModule,Routes,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
adminName="";
adminPassword="";
response=JSON;
  constructor(private httpClient: HttpClient,private router: Router) { }

  ngOnInit() {
  }
adminLogin(a:string,b:string){
	if (a=='' && b=='')
	{
	alert("enter user name and password");
	}
	else{
	if(a==''){
	alert("please enter password");
	
	}
	else{
	if(b==''){
	alert("please enter email");
	}
	else{
	this.httpClient.post('http://localhost:3000/admin-verification/', {"user":a,"password":b}).subscribe(data => {
    this.response = data as JSON;
    console.log(data);
    console.log(this.response[0]['response']);
    if(this.response[0]['response']=='1'){
    this.router.navigateByUrl('/admin');
    //if(this.cookieService.get("userid")==''){
    //console.log(this.cookieService.get("userid"))
    //this.cookieService.set("userid", b);}
	}
	else{
	alert("invalid password");
	}
	
    })
    
	}}
	
	
	}
}
}
