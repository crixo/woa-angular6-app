import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paziente, Provincia } from '../model/paziente.model';
import { PazientiService } from '../services/pazienti.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/messages/alert.service';

@Component({
  template: `
  <div class="container">
    <paziente-form (modelSubmitted)='pazienteSubmitted($event)' [province]="province" [model]="paziente"></paziente-form> 
  </div> 
  `
})
export class PazienteFormContainer implements OnInit, OnDestroy {
  paziente: Paziente;
  province: Provincia[];
  private subs: Subscription[] = new Array<Subscription>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private momentSvc: MomentService,
    private pazientiService: PazientiService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe(data => {
        const paziente = { ...data['paziente'] };
        if (paziente.dataDiNascita !== undefined) {
          paziente.dataDiNascita = this.momentSvc.toLocalString(paziente.dataDiNascita);
        }
        this.paziente = paziente;
      })
    );

    this.subs.push(
      this.pazientiService.getProvince()
        .subscribe(data => {
          this.province = data;
        })
    );
  }

  public pazienteSubmitted(paziente: Paziente) {
    let pazienteDto = { ...paziente }
    pazienteDto.dataDiNascita = this.momentSvc.toApiString(paziente.dataDiNascita);
    this.subs.push(
      this.pazientiService.update(pazienteDto).subscribe((result) => {
        if(result){
          this.onSaveComplete(`paziente ${result.cognome} salvato con successo`);
        }
      })
    );
  }

  onSaveComplete(message?: string): void {
    if (message) {
      //this.messageSvc.addMessage(message);
      this.alertService.success(message);
    }
    //this.reset();
    // Navigate back to the product list
    this.router.navigate(['/pazienti']);
  }


  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}