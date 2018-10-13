import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';


import { Paziente } from '../model/paziente.model';
import { PazientiService } from './pazienti.service';

@Injectable()
export class PazienteResolver implements Resolve<Paziente> {

    constructor(private pazienteSvc: PazientiService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Paziente> {
        let id = route.params['pazienteId'] || 1388;
        console.log(`Paziente id: ${id}`);
        // let id = route.paramMap.get('id');
        if (isNaN(+id)) {
            console.log(`Paziente id was not a number: ${id}`);
            this.router.navigate(['/pazienti']);
            return of(null);
        }
        return this.pazienteSvc.getPazienteById(+id).pipe(
            map(product => {
                if (product) {
                    return product;
                }
                console.log(`Paziente was not found: ${id}`);
                this.router.navigate(['/pazienti']);
                return null;
            }),
            catchError(error => {
              console.log(`Retrieval error: ${error}`);
              this.router.navigate(['/pazienti']);
              return of(null);
            })
            );
    }
}