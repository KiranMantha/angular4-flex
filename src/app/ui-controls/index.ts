import { NgModule, ModuleWithProviders } from "@angular/core";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "./dropdown";


const NgDropdown = [Dropdown, DropdownToggle, DropdownMenu, DropdownItem];

@NgModule({
    declarations: [
        ...NgDropdown
    ],
    exports: [
        ...NgDropdown
    ]    
})
export class UIModule { }
