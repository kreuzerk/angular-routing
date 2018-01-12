import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {MessageComponent} from './message.component';
import {MessageService} from './message.service';
import {RouterModule} from '@angular/router';
import {messageRoutes} from './message.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(messageRoutes)
    ],
    declarations: [
        MessageComponent
    ],
    providers: [
        MessageService
    ]
})
export class MessageModule {
}
