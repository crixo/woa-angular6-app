import { Component, OnInit, OnDestroy } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { PazientiService } from '../services/pazienti.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/shared/moment.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/messages/message.service';

@Component({
  templateUrl: 'paziente-form.page.html'
})
export class PazienteFormPage implements OnInit, OnDestroy {
  paziente: Paziente;
  province: any[];
  private subs: Subscription[] = new Array<Subscription>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private momentSvc: MomentService,
    private pazientiService: PazientiService,
    private messageSvc: MessageService) { }

  ngOnInit() {
    this.subs.push(
      this.route.data.subscribe(data => {
        const paziente = { ...data['paziente'] };
        paziente.dataDiNascita = this.momentSvc.toLocalString(paziente.dataDiNascita);
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
    paziente.dataDiNascita = this.momentSvc.toApiString(this.paziente.dataDiNascita);
    console.log(paziente);
    this.subs.push(
      this.pazientiService.update(paziente).subscribe((result) => {
        console.log(result);
        this.onSaveComplete('paziente salvato con successo');
      }, (err) => {
        console.log(err);
      })
    );
  }

  onSaveComplete(message?: string): void {
    if (message) {
        this.messageSvc.addMessage(message);
    }
    //this.reset();
    // Navigate back to the product list
    this.router.navigate(['/pazienti']);
}


  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}