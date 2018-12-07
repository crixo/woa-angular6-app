import { EventEmitter, Output, OnDestroy, Input } from "@angular/core";
import { NgbModal, NgbModalRef, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";

export class ModalEditComponent<T> implements OnDestroy {
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

  constructor(private modalService: NgbModal) { }

  edit_int<T extends object>(entity: T, component: any, modalOptions:NgbModalOptions = { }) {
    console.log(entity);
    const model = { ...(entity as object) } as T;
    this._modalRef = this.modalService.open(component, modalOptions);
    this._modalRef.componentInstance.model = model;
    this._modalRef.componentInstance.tipi = null;//this.tipi;
    this._sub = this._modalRef.componentInstance.modelSubmitted.subscribe(($e) => {
      const data = $e;
      console.log(data);
      this.entitySubmitted.emit(data);
    })
  }

  ngOnDestroy(): void {
    if (this._sub) this._sub.unsubscribe();
  }
}