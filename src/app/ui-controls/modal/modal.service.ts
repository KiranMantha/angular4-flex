//https://github.com/jdjuan/ng-notyf
import { DynamicComponentResolverService } from './dynamic-component-resolver.service';
import { Injectable, ComponentRef } from '@angular/core';
import { ModalComponent } from './modal-component/modal.component';
import { IModalOptions, IModal } from './index';

@Injectable()
export class ModalService {
  private _modalList: Array<any> = [];
  private _delay: number = 300;

  constructor(private domService: DynamicComponentResolverService) {
    debugger;
  }

  private addModal(options: IModalOptions): IModal {
    const modalRef = this.domService.createComponentRef(ModalComponent);
    modalRef.instance.Id = new Date().getTime();
    modalRef.instance.title = options.modalTitle;
    modalRef.instance.bodyTemplate = options.bodyTemplate;
    modalRef.instance.modalClass = options.modalClass || '';
    modalRef.instance.backdrop = options.backdrop || false;
    modalRef.instance.hideDefaultCloseButton = options.hideDefaultCloseButton || false;
    modalRef.instance.isTemplateRef = options.bodyTemplate ? true : false;

    let modal: IModal = {
      onClose: modalRef.instance.onClose,
      onOpen: modalRef.instance.onOpen,
      Id: modalRef.instance.Id
    };
    modalRef.instance.closeModal.subscribe(() => {
      this.close(modal);
    });
    const modalElement = this.domService.getDomElementFromComponentRef(modalRef);
    this.domService.addChild(modalElement);
    setTimeout(() => {
      modalRef.instance.onOpen.next();
    }, this._delay);
    this._modalList.push(modalRef);
    return modal;
  }

  show(options: IModalOptions): IModal {
    if (options.bodyTemplate || options.bodyComponent) {
      return this.addModal(options);
    }
    if ((options.bodyTemplate && options.bodyComponent) || !(options.bodyTemplate || options.bodyComponent)) {
      throw Error('Provide either bodyTemplate or bodyComponent');
    }
  }

  close(modal: IModal) {
    let index;
    let modalRef = this._modalList.filter((x, i) => {
      if (x.instance.Id === modal.Id) {
        index = i;
        return x;
      }
    })[0];
    modalRef && this._close(modalRef, index);
  }

  private _close(modalRef: any, index: number) {
    modalRef.instance.isModalClosed = true;
    setTimeout(() => {
      index > -1 && this._modalList.splice(index, 1);
      modalRef.instance.onClose.next();
      this.domService.destroyRef(modalRef);
    }, this._delay);
  }

  closeAll() {
    this._modalList.forEach((modalRef, i) => {
      this._close(modalRef, i);
    });
  }
}
