import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/models/Iproduct';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {

  public data : IPagination<IProduct>;
  public brands: IBrand[];
  public types : IType[];
  sideNavOpen : boolean = true;

  private sub$ = new Subscription();
  constructor(private shopService: ShopService) { }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
   this.getProducts();
  }

  @HostListener("window:resize")
  public OnWindowResize(){
    window.innerWidth < 960 ? (this.sideNavOpen = false) : (this.sideNavOpen = true);
  }



  private getProducts(){
    const sub$ = this.shopService.getProducts().subscribe(res=>{
      this.data = res;
     });
     this.sub$.add(sub$);
  }
}
