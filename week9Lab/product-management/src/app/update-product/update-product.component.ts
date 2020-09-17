import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/interfaces';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  editProduct: Product = { Name: null, Description: null, Price: null, units: null, _id: null }



  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    this.editProduct._id = this.route.snapshot.params.id;
    this.editProduct.Name = this.route.snapshot.params.name;
    this.editProduct.Description = this.route.snapshot.params.description;
    this.editProduct.Price = this.route.snapshot.params.price;
    this.editProduct.units = this.route.snapshot.params.units;
    console.log(this.editProduct)

  }

}
