import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductResolver} from './product-resolver';
import {ProductEditInfoComponent} from './product-edit/product-edit-info/product-edit-info.component';
import {ProductEditTagsComponent} from './product-edit/product-edit-tags/product-edit-tags.component';
import {Routes} from '@angular/router';

export const productRoutes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: ':id', component: ProductDetailComponent, resolve: {
            product: ProductResolver
        }
    },
    {
        path: ':id/edit', component: ProductEditComponent, resolve: {
            product: ProductResolver
        },
        children: [
            // todo move to product edit
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
            },
            {
                path: 'info',
                component: ProductEditInfoComponent
            },
            {
                path: 'tags',
                component: ProductEditTagsComponent
            }
        ]
    }
];

