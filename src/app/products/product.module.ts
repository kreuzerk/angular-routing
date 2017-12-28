import {NgModule} from '@angular/core';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service';

import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {productRoutes} from './product.routes';
import {ProductResolver} from './product-resolver';
import {ProductEditInfoComponent} from './product-edit/product-edit-info/product-edit-info.component';
import {ProductEditTagsComponent} from './product-edit/product-edit-tags/product-edit-tags.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductEditComponent,
        ProductFilterPipe,
        ProductEditInfoComponent,
        ProductEditTagsComponent
    ],
    providers: [
        ProductService,
        ProductResolver
    ]
})
export class ProductModule {
}
