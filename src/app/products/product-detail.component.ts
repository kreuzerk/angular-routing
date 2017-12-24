import {Component, OnInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from './product.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(
            (params: Params) => this.getProduct(+params.get('id'))
        );
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }
}
