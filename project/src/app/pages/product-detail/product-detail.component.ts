import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.api.getProductById(productId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error(err);
        }
      })
    })
  }


}
