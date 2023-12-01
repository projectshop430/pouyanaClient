import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/Iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<IPagination<IProduct>>{
   return this.http.get<IPagination<IProduct>>(this.backendUrl+'/products');
  }
}
