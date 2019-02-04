import { NgModule, ModuleWithProviders, TemplateRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { ModalComponent } from './modal-component/modal.component';
import { ModalService } from './modal.service';
import { DynamicComponentResolverService } from './dynamic-component-resolver.service';

export interface IModalOptions {
  modalTitle: String;
  bodyTemplate?: TemplateRef<any>;
  bodyComponent?: Component;
  modalClass?: String;
  backdrop?: Boolean;
  hideDefaultCloseButton?: Boolean;
}

export interface IModal {
  onClose: Subject<void>;
  onOpen: Subject<void>;
  Id: Number;
}

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  providers: [ModalService, DynamicComponentResolverService]
})
export class NgModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgModalModule,
      providers: [ModalService]
    };
  }
}
