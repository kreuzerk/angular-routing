import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SelectiveStrategyService} from './selective-strategy.service';

import {StarComponent} from './star.component';
import {SpinnerComponent} from './spinner/spinner.component';

@NgModule({
    imports: [CommonModule],
    declarations: [StarComponent, SpinnerComponent],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        SpinnerComponent
    ],
    providers: [SelectiveStrategyService]
})
export class SharedModule {
}
