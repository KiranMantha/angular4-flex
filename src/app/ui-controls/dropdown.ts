import { HostListener, Directive, OnInit } from "@angular/core";
import { EventEmitter } from "events";

@Directive({
    selector: '[dropdown]'
})
export class DropdownDirective implements OnInit {
    public click = new EventEmitter();
    @HostListener('click', ['$event'])
    onClick(e:any){
        e.stopPropagation();
        this.closeAllDropdowns();
        let el = e.target.closest('[data-toggle="dropdown"]');
        if(el.nextElementSibling.classList.contains('open')){
            el.nextElementSibling.classList.remove('open');
        } else {
            el.nextElementSibling.classList.add('open');
        }
    }

    closeAllDropdowns = () => {
        let dd = document.getElementsByClassName('dropdown-menu');
        for(let i=0; i<dd.length; i++) {
            dd[i].classList.remove('open');
        }
    }

    ngOnInit(){
        document.addEventListener('click', this.closeAllDropdowns);
    }
}
