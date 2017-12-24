import {Component, OnInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from './product.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private productService: ProductService,
                private activatedRoute: ActivatedRoute) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

        this.activatedRoute.queryParamMap.subscribe(
            (queryParams: Params) => {
                this.listFilter = queryParams.get('filterBy');
                this.showImage = queryParams.get('showImage') === 'true';
            }
        );

        this.productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
    }
}
