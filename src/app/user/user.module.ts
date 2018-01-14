import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';

import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {AuthGuard} from './auth.guard';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService, AuthGuard
    ]
})
export class UserModule {
}
