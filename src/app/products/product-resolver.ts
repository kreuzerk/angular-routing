import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IProduct} from './product';
import {Observable} from 'rxjs/Observable';
import {ProductService} from './product.service';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {

    constructor(private productService: ProductService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | Observable<IProduct> | Promise<IProduct> {
        return this.productService.getProduct(+route.paramMap.get('id'));
    }
}