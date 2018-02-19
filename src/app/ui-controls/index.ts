import { NgModule, ModuleWithProviders } from "@angular/core";
import { DropdownDirective } from "./dropdown";

@NgModule({
    declarations: [DropdownDirective],
    exports: [DropdownDirective]    
})
export class UIModule { }
