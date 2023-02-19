import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Này là nạp dữ vào product để load ra màn hình
    this.productService
      .getListProduct()
      .subscribe((res) => (this.products = res));
  }
  // Khi kích vào xóa sẽ chạy hàm này
  onDelete(id: number) {
    this.productService.delete(id).subscribe((data) => {
      this.productService.getListProduct().subscribe((data) => {
        this.products = data;
      });
    });
  }
  // Khi kích vào edit sẽ chạy hàm này
  onEdit(product: Product) {}
}
