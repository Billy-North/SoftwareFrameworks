import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/interfaces';
import { HttpRequestsService } from '../services/http-requests.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  newProduct: Product = { Name: null, Description: null, Price: null, units: null, _id: null }
  productAdded = false


  constructor(
    private httpService: HttpRequestsService
  ) { }

  ngOnInit(): void {

  }

  addProduct() {
    this.httpService.createProduct(this.newProduct).subscribe((data: any) => {
      if (data) {
        this.productAdded = true
        this.newProduct = { Name: null, Description: null, Price: null, units: null, _id: null }
      }
    })
  }


}
