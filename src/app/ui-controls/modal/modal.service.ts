import { Injectable, TemplateRef } from "@angular/core";
import { ComponentLoader } from "./componentloader";
import { ModalContainer } from "./modal.container";
import IModalOptions from './modal-options.interface';

@Injectable()
export class ModalService {
    private _loader: ComponentLoader<ModalContainer>;

    show(
        content: TemplateRef<any>,
        modalOptions: IModalOptions
    ) {
        this._loader
            .load(ModalContainer)
            .appendTo(modalOptions.appendTo);

        this._loader.componentRef.instance.modalTitle = modalOptions.modalTitle;
        this._loader.componentRef.instance.bodyTemplate = modalOptions.bodyTemplate;
    }
}