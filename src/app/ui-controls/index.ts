import { NgModule, ModuleWithProviders } from "@angular/core";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "./dropdown";
import { NotificationsModule } from "./notifications";
import { NgxModalModule } from "./modal";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const NgDropdown = [Dropdown, DropdownToggle, DropdownMenu, DropdownItem];

@NgModule({
    declarations: [
        ...NgDropdown
    ],
    exports: [
        ...NgDropdown
    ],
    imports: [
        BrowserAnimationsModule,
        NotificationsModule.forRoot()
    ]
})
export class UIModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UIModule
        }
    }
}
