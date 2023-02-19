import { Component, OnInit } from '@angular/core';
import { BannerService } from '../services/banner.service';
import { Banner } from '../models/banner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  banners: Banner[] = [];
  constructor(private bn: BannerService) {}

  ngOnInit(): void {
    this.bn.getBanners().subscribe(res=>this.banners = res);
  }
}
