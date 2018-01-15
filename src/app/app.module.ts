import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ProductData} from './products/product-data';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFoundComponent} from './page-not-found.component';

/* Feature Modules */
import {UserModule} from './user/user.module';
import {MessageModule} from './messages/message.module';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app.routing.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(ProductData, {delay: 2000}),
        UserModule,
        MessageModule,
        AppRoutingModule,
        SharedModule
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
