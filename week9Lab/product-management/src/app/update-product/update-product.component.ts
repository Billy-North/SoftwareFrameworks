import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/interfaces';
import { HttpRequestsService } from '../services/http-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  editProduct: Product = { Name: null, Description: null, Price: null, units: null, _id: null }
  productUpdated = false;



  constructor(
    private route: ActivatedRoute,
    private httpService: HttpRequestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editProduct._id = this.route.snapshot.params.id;
    this.editProduct.Name = this.route.snapshot.params.name;
    this.editProduct.Description = this.route.snapshot.params.description;
    this.editProduct.Price = this.route.snapshot.params.price;
    this.editProduct.units = this.route.snapshot.params.units;
  }

  updateProduct() {
    this.httpService.updateProduct(this.editProduct).subscribe((data: any) => {
      if (data) { this.router.navigate(['/read']) }
    })

  }

}
