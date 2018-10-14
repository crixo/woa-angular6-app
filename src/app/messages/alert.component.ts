import { Component, OnInit, Input } from '@angular/core';

import { Alert, AlertType } from './alert';
import { AlertService } from './alert.service';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'alert',
    // template: `
    //   <div *ngFor="let alert of alerts" class="{{ cssClass(alert) }} alert-dismissable">
    //     {{alert.message}}
    //     <a class="close" (click)="removeAlert(alert)">&times;</a>
    //   </div>
    // `
    template: `
        <ngb-alert *ngFor="let alert of alerts" [type]="enumToString(alert.type)" [dismissible]="true" (close)="removeAlert(alert)">{{ alert.message }}</ngb-alert>
    `
})

export class AlertComponent {
    @Input() id: string;

    AlertType: AlertType;

    alerts: Alert[] = [];

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getAlert(this.id).subscribe((alert: Alert) => {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array
            this.alerts.push(alert);
        });

        this.alertService.getAlert(this.id).pipe(
          debounceTime(5000)
        ).subscribe(() => this.alerts = []);
    }

    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    enumToString(type: AlertType){
        return AlertType[type].split(/(?=[A-Z])/).join().replace(",", " ");
    }
}