import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Iproduct';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss']
})
export class CardShopComponent implements OnInit {
  @Input() product: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
