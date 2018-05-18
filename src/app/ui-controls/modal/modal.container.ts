import { Component, TemplateRef } from "@angular/core";

@Component({
    selector: 'modal-container',
    template: `
        <div class="modal">
            <div class="modal-header">
                {{ modalTitle }}
            </div>
            <div class="modal-body">
                <ng-container *ngTemplateOutlet="bodyTemplate"></ng-container>
            </div>
        </div>
    `
})
export class ModalContainer {
    modalTitle:string;
    bodyTemplate: TemplateRef<any>;
}