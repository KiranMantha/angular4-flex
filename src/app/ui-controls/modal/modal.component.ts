import { Component, TemplateRef } from "@angular/core";

@Component({
    selector: '',
    template: `
        <div class="modal-header">
            {{ modalTitle }}
        </div>
        <div class="modal-body">
            <ng-container *ngTemplateOutlet="bodyTemplate"></ng-container>
        </div>
    `,
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    modalTitle:string;
    bodyTemplate: TemplateRef<any>;
}