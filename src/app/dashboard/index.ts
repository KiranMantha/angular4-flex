import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component'
import { UIModule } from '../ui-controls';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        UIModule
    ]
})
export class DashboardModule { }
