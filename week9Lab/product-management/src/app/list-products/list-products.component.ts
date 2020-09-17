import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/interfaces';
import { HttpRequestsService } from '../services/http-requests.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private httpService: HttpRequestsService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data: any) => {
      if (data) { this.products = data }

      console.log(this.products)
    })
  }

  editProduct(product: Product) {
    this.router.navigate(['/update', product._id, product.Name, product.Description, product.Price, product.units]);
  }


}
