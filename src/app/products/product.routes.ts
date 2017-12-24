import {Routes} from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductEditComponent} from './product-edit.component';
import {ProductDetailComponent} from './product-detail.component';

export const productRoutes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'products/:id/edit', component: ProductEditComponent}
]