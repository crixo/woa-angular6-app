import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertService } from './alert.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert.component';
import { ENumAsStringPipe } from './enum-to-string.pipe';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule,
    ],
    exports: [AlertComponent],
    declarations: [
        AlertComponent, ENumAsStringPipe
    ],
    providers: [
        AlertService
    ]
})
export class MessageModule { }