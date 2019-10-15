import { HostListener, Directive, Inject, forwardRef, ContentChild, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
    selector: '[data-toggle="dropdown"]',
    host: {
        '(click)': 'toggleopen($event, false)'
    }
})
export class DropdownToggle {
    constructor(@Inject(forwardRef(()=> Dropdown)) public dropdown, private elem: ElementRef) {        
        this.dropdown.textSubject.subscribe(text => {
            elem.nativeElement.innerText = text;
        });
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
    public textSubject: Subject<string> = new Subject();
    public isDropdownOpen: boolean = false;

    selectedItem = (item:any) => {
        this.onSelected.emit(item);
        if(typeof item === 'string') {
            this.textSubject.next(item);
        } else {
            this.textSubject.next(item.text);
        }
    }
}
