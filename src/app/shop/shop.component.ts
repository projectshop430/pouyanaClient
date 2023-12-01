import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {

  private sub$ = new Subscription();
  constructor(private shopService: ShopService) { }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
   const sub$ = this.shopService.getProducts().subscribe(res=>{
      console.log(res);
     });
  }

}
