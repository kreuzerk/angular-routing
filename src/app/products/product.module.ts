import {NgModule} from '@angular/core';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductEditComponent} from './product-edit.component';

import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service';

import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {productRoutes} from './product.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductFilterPipe
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {
}
