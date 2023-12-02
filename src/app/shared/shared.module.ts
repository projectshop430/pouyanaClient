import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { CardShopComponent } from './Components/card-shop/card-shop.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    CardShopComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    CardShopComponent,MatSidenavModule
  ]
})
export class SharedModule { }
