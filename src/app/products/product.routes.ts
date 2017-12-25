import {Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductResolver} from './product-resolver';

export const productRoutes: Routes = [
    {path: 'products', component: ProductListComponent},
    {
        path: 'products/:id', component: ProductDetailComponent, resolve: {
        product: ProductResolver
    }
    },
    {
        path: 'products/:id/edit', component: ProductEditComponent, resolve: {
        product: ProductResolver
    }
    }
]