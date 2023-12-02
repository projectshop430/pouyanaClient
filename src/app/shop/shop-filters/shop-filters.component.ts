import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/shared/models/brand';
import { IType } from 'src/app/shared/models/type';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-filters',
  templateUrl: './shop-filters.component.html',
  styleUrls: ['./shop-filters.component.scss']
})
export class ShopFiltersComponent implements OnInit {
 public brands : IBrand[];
 public types : IType[];
 
  constructor(private shopService : ShopService) { }

  private getTypes() {
    this.shopService.getTypes().subscribe((res => {
      this.types = res;
    }));
  }

  private getBrands() {
    this.shopService.getbrands().subscribe((res => {
      this.brands = res;
    }));
  }

  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
  }

}
