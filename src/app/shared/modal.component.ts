import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  template:`
<div class="modal-header">
  <h4 class="modal-title">{{title}}</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <ng-content></ng-content>
</div>
  `
})
export class ModalComponent implements OnInit {

  @Input() title = `Modal Default Title`;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
  }

}