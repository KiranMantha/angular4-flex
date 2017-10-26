import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
    imports: [
        RouterModule
    ]
})
export class SidebarModule {

}