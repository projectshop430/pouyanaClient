import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from './shared/models/Iproduct';
import { IPagination } from './shared/models/pagination';
import { ShopService } from './shop/shop.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){

  }
  
  ngOnInit(): void {
   
  }
  title = 'pouyanaClient';
}
