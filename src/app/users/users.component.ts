import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
search_result_user=JSON;
all_users_list=[];
  constructor(private httpClient: HttpClient, @Inject(DOCUMENT) document) { }

  ngOnInit() {
  this.httpClient.get('http://localhost:3000/all-users/').subscribe(data => {
  this.search_result_user = data as JSON;

  this.all_users_list.push(this.search_result_user);
  console.log(this.all_users_list);
  console.log(this.search_result_user['username']);
  
  })
  }

}
