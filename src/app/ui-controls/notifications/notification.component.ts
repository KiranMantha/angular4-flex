import { Component, Input, Output, EventEmitter, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";
import {
    AnimationTriggerMetadata,
    trigger,
    style,
    transition,
    animate
} from '@angular/animations';
import { Message } from "./message";

export const flyInOut = trigger('flyInOut', [
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('200ms ease-in', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({transform: 'translateX(100%)'}))
    ])
]);

@Component({
    selector: 'notify',
    template: `
        <div @flyInOut class="notification"
            [ngClass]="{'is-info':     message.type == 'info',
                        'is-danger':   message.type == 'danger'
                        }">
            <button class="dismiss" (click)="dismiss()"><i class="fas fa-times"></i></button>
            {{message.content}}
        </div>
    `,    
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    animations: [flyInOut]
})
export class Notify {
    message: Message = new Message('','');
    onDismiss: EventEmitter<any> = new EventEmitter<any>();

    constructor(public elementRef: ElementRef, public renderer: Renderer){}

    private dismiss() {
        this.onDismiss.emit(this);
    }
}