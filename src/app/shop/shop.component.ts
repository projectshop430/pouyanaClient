import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/models/Iproduct';
import { IPagination } from '../shared/models/pagination';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {

  public data : IPagination<IProduct>;

  private sub$ = new Subscription();
  constructor(private shopService: ShopService) { }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
   this.getProducts();
  }

  private getProducts(){
    const sub$ = this.shopService.getProducts().subscribe(res=>{
      this.data = res;
     });
     this.sub$.add(sub$);
  }
}
