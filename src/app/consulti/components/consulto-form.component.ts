import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConsultiService } from '../consulti.service';
import { CONSULTO_FORM } from '../ui-form/schemas/consulto.form';

import { Consulto } from '../model/consulto.model';
import { MomentService } from '../../shared/moment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'consulto-form',
  templateUrl: './consulto-form.component.html'
})
export class ConsultoFormComponent implements OnInit, OnDestroy {
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[];
  public model : Consulto;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private momentSvc: MomentService,
    private consultiSvc: ConsultiService) {}

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        console.log(params);
        const pazienteId = +params['pazienteId'];
        const id = +params['id']; // (+) converts string 'id' to a number
 
        // In a real app: dispatch action to load the details here.
        this.consultiSvc.getConsultoById(pazienteId, id)
        .subscribe( data => {
          let model = {...data};
          model.data = this.momentSvc.toLocalString(model.data);
          this.model = model;
        });
      });




      this.fields= [
        ...CONSULTO_FORM().template
      ]; 
    }

  public submit() {
    this.model.data = this.momentSvc.toApiString(this.model.data);
    console.log(this.model);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}