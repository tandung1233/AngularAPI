import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private prodSrv: ProductService) {}
  // Nhớ ghi cái này để sử dụng được form
  productFormCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    sale_price: new FormControl(),
    image: new FormControl(),
  });
  onCreate() {
    // this.productFormCreate.value đây chính là giá trị người dùng nhập vào
    // data này là dữ liệu mà khi ta thêm xong(tưởng tượng như là bên postman khi ta bấm thành công
    // nó sẽ hiện dữ liệu đã thêm thành công  ở dưới bao gồm cả id mà nó json - server tự sinh ra)
    this.prodSrv.create(this.productFormCreate.value).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
