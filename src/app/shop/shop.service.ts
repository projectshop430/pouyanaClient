import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/Iproduct';
import { Observable, map } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private backendUrl = environment.backendUrl;
  private shopParams = new ShopParams();

  constructor(private http: HttpClient) { }

  getShopParams(){
    return this.shopParams;
  }
  updateShopParams(params: ShopParams){
    this.shopParams = params;
  }

  getProducts() : Observable<IPagination<IProduct>>{
    let params = this.generateShopParams();

   return this.http.get<IPagination<IProduct>>(this.backendUrl+'/products',{params});
  }
  private generateShopParams() {
    let params = new HttpParams();
    if (this.shopParams.search) params = params.append('search', this.shopParams.search);
    if (this.shopParams.brandId && this.shopParams.brandId > 0)
      params = params.append('brandId', this.shopParams.brandId);
    if (this.shopParams.typeId && this.shopParams.typeId > 0)
      params = params.append('typeId', this.shopParams.typeId);
    params = params.append('pageIndex', this.shopParams.pageIndex);
    params = params.append('pageSize', this.shopParams.pageSize);
    params = params.append('pageSize', this.shopParams.sort);
    params = params.append('typeSort', this.shopParams.typeSort);
    return params;
  }

  getbrands(includeAll = true){
    return this.http.get<IBrand[]>(`${this.backendUrl}/productBrand`).pipe(map((brands)=>{
      if (includeAll) brands = [{id : 0, title : 'همه' }, ...brands];
      return brands;
    }));
  }
  getTypes(includeAll = true){
    return this.http.get<IType[]>(`${this.backendUrl}/productType`).pipe(map((types)=>{
      if (includeAll) types = [{id : 0, title : 'همه' }, ...types];
      return types;
    }));
  }
}
