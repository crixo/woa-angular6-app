import { Component, Output, EventEmitter, Input } from '@angular/core';
import { addButtonAnimations } from '../../services/add-button.animations';
import { EntityType } from '../model';

@Component({
  selector: 'entity-add',
  template: `
<div id="fab-dismiss" 
    *ngIf="fabTogglerState==='active'" 
    (click)="onToggleFab()">
</div>
<div class="fab-container">
  <button mat-fab class="fab-toggler"
          (click)="onToggleFab()">
    <i class="fas fa-plus" [@fabToggler]="{value: fabTogglerState}"></i> <!-- Animation here -->
  </button>
  <div [@speedDialStagger]="buttons.length"> <!-- and here -->
    <button *ngFor="let btn of buttons"
            mat-mini-fab
            class="fab-secondary"
            color="secondary"
            title="{{btn.name}}"
            (click)="onEntitySelected(btn.name)">
      <i class="material-icons">{{btn.icon}}</i>
    </button>
  </div>
</div> 
  `,
  //styleUrls: ['./entity-add.scss'],
  animations: addButtonAnimations
})
export class EntityAddComponent {


  buttons = [];
  fabTogglerState = 'inactive';

  @Input() entities: EntityType[];

  @Output() entityToAddSelected = new EventEmitter<string>();

  constructor() { }

  showItems() {
    this.fabTogglerState = 'active';
    console.log(this.entities);
    this.buttons = this.entities;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  onEntitySelected(entityName: string){
    console.log(entityName);
    this.onToggleFab();
    this.entityToAddSelected.emit(entityName);
  }
}