import { EventEmitter, Output, OnDestroy, Input } from "@angular/core";
import { NgbModal, NgbModalRef, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { IEntity } from "../consulti/model";

export class ModalEditBaseComponent<T> implements OnDestroy {
  _entityPersisted: Boolean;
  _modalRef: NgbModalRef;
  _sub: Subscription;

  @Output() entitySubmitted = new EventEmitter<T>();
  @Input('entityPersisted') set entityPersisted(value: boolean) {
    this._entityPersisted = value;
    if (value) {
      this._modalRef.close();
    }
  }

  editAction = "edit";
  gridButtonLabel: string = "edit";

  constructor(protected modalService: NgbModal) { }

  edit_int<T extends IEntity>(entity: T, component: any, modalOptions:NgbModalOptions = { }) {
    const model = { ...(entity as IEntity) } as T;
    this._modalRef = this.modalService.open(component, modalOptions);
    this._modalRef.componentInstance.model = model;
    //this._modalRef.componentInstance.modalAction = model.id>0? "Crea" : "Aggiorna";
    this._sub = this._modalRef.componentInstance.modelSubmitted.subscribe(($e) => {
      const data = $e;
      this.entitySubmitted.emit(data);
    })
  }

  ngOnDestroy(): void {
    if (this._sub) this._sub.unsubscribe();
  }
}