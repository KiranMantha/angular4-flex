import { NgModule } from "@angular/core";
import { HeaderComponent } from './header.component';
import { RouterModule } from "@angular/router";
import { UIModule } from "../ui-controls";

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        RouterModule,
        UIModule
    ]
})

export class HeaderModule {

}