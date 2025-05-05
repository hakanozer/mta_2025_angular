import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/IProducts';
import { getOneLike, storeLike } from '../../utils/store';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  item?: Product
  bigImage = ''
  isLike = false

  constructor( private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.api.getProductById(productId).subscribe({
        next: (res) => {
          this.item = res.data
          this.bigImage = this.item.images[0]
          this.isLike = getOneLike(this.item.id)
          localStorage.setItem('product', JSON.stringify(this.item))
        },
        error: (err) => {
          console.error(err);
        }
      })
    })
  }

  changeBigImage(path: string) {
    this.bigImage = path
  }

  addLike() {
    storeLike(this.item!.id)
    this.isLike = getOneLike(this.item!.id)
  }


}
