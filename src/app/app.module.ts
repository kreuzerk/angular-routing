import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ProductData} from './products/product-data';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';

/* Feature Modules */
import {ProductModule} from './products/product.module';
import {UserModule} from './user/user.module';
import {MessageModule} from './messages/message.module';
import {appRoutes} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        InMemoryWebApiModule.forRoot(ProductData, {delay: 1000}),
        ProductModule,
        UserModule,
        MessageModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        PageNotFoundComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
