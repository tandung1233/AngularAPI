import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  // Lấy danh sách products
  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  // Thêm mới sử dụng http post
  // Sử dụng truyền vào url và data cần truyền vào
  create(data: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', data);
  }
  // Xóa sử dụng http delete
  delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/products/' + id);
  }
}
