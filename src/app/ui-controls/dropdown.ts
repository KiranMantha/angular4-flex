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
        let el = e.target.closest('.dropdown');
        let ddm = el.querySelector('.dropdown-menu');
        if(ddm.classList.contains('open')){
            ddm.classList.remove('open');
        } else {
            ddm.classList.add('open');
        }
    }

    closeAllDropdowns = () => {
        let dd = document.querySelectorAll('.dropdown-menu');
        for(let i=0; i<dd.length; i++) {
            dd[i].classList.remove('open');
        }
    }

    ngOnInit(){
        document.addEventListener('click', this.closeAllDropdowns);
    }
}
