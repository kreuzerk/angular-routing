import {Component, OnInit} from '@angular/core';

import {IProduct} from '../product';
import {ProductService} from '../product.service';
import {ActivatedRoute, Data, Params} from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((data: Data) => {
            this.product = data['product'];
        });
    }
}
