import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { AlertService } from './alert.service';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert.component';
import { ENumAsStringPipe } from './enum-to-string.pipe';

@NgModule({
    imports: [
        SharedModule,
        NgbAlertModule,
        RouterModule.forChild([
            {
                path: 'messages',
                component: MessageComponent,
                outlet: 'popup'
            }
        ])
    ],
    exports: [AlertComponent],
    declarations: [
        MessageComponent, AlertComponent, ENumAsStringPipe
    ],
    providers: [
        MessageService,
        AlertService
    ]
})
export class MessageModule { }