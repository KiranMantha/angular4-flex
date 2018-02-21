import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component'
import { UIModule } from '../ui-controls';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        UIModule,
        CommonModule
    ]
})
export class DashboardModule { }
