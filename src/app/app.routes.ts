import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {Routes} from '@angular/router';
import {ProductListComponent} from './products/product-list.component';

export const appRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
]