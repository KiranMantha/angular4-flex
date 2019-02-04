//https://netbasal.com/animate-dynamic-components-in-angular-10681438bdd4
//ngComponentOutlet;
import { Component, EventEmitter, TemplateRef } from '@angular/core';

import { AnimationTriggerMetadata, trigger, style, transition, animate, state } from '@angular/animations';

import { Subject } from 'rxjs';

export const flyInOut = trigger('flyInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-100%)' }),
    animate('0.3s ease-in', style({ opacity: '1', transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0%)' }),
    animate('0.3s ease-out', style({ opacity: '0', transform: 'translateY(-100%)' }))
  ])
]);

@Component({
  selector: 'ng-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [flyInOut]
})
export class ModalComponent {
  Id: Number;
  title: String;
  bodyTemplate: TemplateRef<any>;
  modalClass: String;
  backdrop: Boolean = false;
  isModalClosed: Boolean = false;
  hideDefaultCloseButton: Boolean = false;
  isTemplateRef: Boolean = true;

  closeModal: EventEmitter<any> = new EventEmitter<any>();
  onClose: Subject<void> = new Subject();
  onOpen: Subject<void> = new Subject();

  private close(event: any) {
    this.isModalClosed = true;
    this.closeModal.emit();
  }
}
