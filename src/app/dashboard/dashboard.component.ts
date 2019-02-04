import { Component, OnInit, TemplateRef } from '@angular/core';
import { NotificationService } from '../ui-controls/notifications/notification.service';
import { ModalService } from '../ui-controls/modal/modal.service';
import { IModal } from '../ui-controls/modal';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    modalRef:IModal;
    constructor(private alertService: NotificationService, private modalService: ModalService){}

    items:string[] = ['item1', 'item2', 'item3']
    selectedItem = (item) => {
        console.log(item);
    }

    sendNotification = () => {
        this.alertService.sendMessage('Hello World', 'danger');
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show({
            modalTitle: 'sample modal',
            bodyTemplate: template,
            modalClass: 'test-modal'
        });
        this.modalRef.onClose.subscribe(() => {
            console.log('modal closed');
        })
    }

    ngOnInit(){
        this.alertService.sendMessage('Hello World', 'info');
    }
}