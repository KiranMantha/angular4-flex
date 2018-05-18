import { Component, ElementRef, Renderer, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'notifications',
    template: `
        <ng-content></ng-content>
    `,
    host: {
        'class': 'notifications_wrapper'
    },
    styleUrls: ['./notification.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent { 
    constructor(public elementRef: ElementRef, public renderer: Renderer){}
}