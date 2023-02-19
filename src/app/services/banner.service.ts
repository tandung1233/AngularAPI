import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  // Tiêm http để sử dụng get, put, post, delete
  constructor(private http: HttpClient) {}
  // Dữ liệu đổ về để hứng nên cần dùng Observable(vì mình dùng nhiều phần tử nên dùng mảng)
  // Trả về Observable
  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>('http://localhost:3000/banner');
  }
}
