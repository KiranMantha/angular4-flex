import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { UIModule } from "../ui-controls";

@NgModule({
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
    imports: [
        RouterModule,
        UIModule
    ]
})
export class SidebarModule {

}