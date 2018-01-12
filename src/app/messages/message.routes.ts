import {Routes} from '@angular/router';
import {MessageComponent} from './message.component';

export const messageRoutes: Routes = [
    {path: 'messages', component: MessageComponent, outlet: 'popup'}
];
