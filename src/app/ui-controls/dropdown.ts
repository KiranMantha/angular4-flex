import { HostListener, Directive, Inject, forwardRef, ContentChild, Input, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[data-toggle="dropdown"]',
    host: {
        '(click)': 'toggleopen($event, false)'
    }
})
export class DropdownToggle {
    constructor(@Inject(forwardRef(()=> Dropdown)) public dropdown) {

    }

    toggleopen = (e, isoutside:boolean) => {
        e.stopPropagation();
        if(!isoutside) {
            this.dropdown.isDropdownOpen = !this.dropdown.isDropdownOpen;
        }
        else { 
            this.dropdown.isDropdownOpen = false;
        }
    }

}

@Directive({
    selector: '[dropdownMenu]',
    host: {
        '[class.open]': 'dropdown.isDropdownOpen'
    }
})
export class DropdownMenu {
    constructor(@Inject(forwardRef(()=> Dropdown)) public dropdown) {

    }
}

@Directive({
    selector: '[dropdownItem]',
    host: {
        '(click)': 'selectedItem()'
    }
})
export class DropdownItem {
    @Input() item:any;
    constructor(@Inject(forwardRef(()=> Dropdown)) public dropdown) {

    }
    selectedItem = () => {
        this.dropdown.selectedItem(this.item);
    }
}

@Directive({
    selector: '[dropdown]',
    host: {
        '(document:click)': '_toggle.toggleopen($event, true)'
    }
})
export class Dropdown {
    @ContentChild(DropdownToggle) private _toggle: DropdownToggle;
    @Output() onSelected = new EventEmitter();
    public isDropdownOpen: boolean = false;

    selectedItem = (item:any) => {
        this.onSelected.emit(item);
    }
}
