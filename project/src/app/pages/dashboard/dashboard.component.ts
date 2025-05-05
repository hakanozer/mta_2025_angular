import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProducts';
import { ProductItemComponent } from '../inc/product-item/product-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  products: Product[] = []

  constructor( private api: ApiService) { 
  }

  ngOnInit() {
    this.productView()
    this.api.getAllProducts().subscribe({
        next: (res) => {
          console.log(res);
          this.products = res.data
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

  productView() {
    try {
      const stProduct = localStorage.getItem('product')
      if (stProduct) {
        const product = JSON.parse(stProduct) as Product
        console.log(product);
      }
    } catch (error) {
      localStorage.removeItem('product')
    }
  }


}
