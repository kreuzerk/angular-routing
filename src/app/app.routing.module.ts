import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SelectiveStrategyService} from './shared/selective-strategy.service';
import {AuthGuard} from './user/auth.guard';

const appRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {
        path: 'products', canActivate: [AuthGuard], loadChildren: 'app/products/product.module#ProductModule',
        data: {preload: true}
    },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectiveStrategyService})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
