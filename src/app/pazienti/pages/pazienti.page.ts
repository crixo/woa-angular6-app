import { Component, OnInit } from '@angular/core';
import { Paziente } from '../model/paziente.model';
import { PazientiService } from '../services/pazienti.service';
import { Page } from '../../shared/page';
import { Router } from '@angular/router';
import { PagedData } from 'src/app/shared/paged-data';

@Component({
  templateUrl: 'pazienti.page.html',
  //styles: [`@import '/node_modules/@swimlane/ngx-datatable/release/themes/material.css';`]
})
export class PazientiPage implements OnInit {
  page = new Page();
  rows: Paziente[];
  columns = [{name:'Nome'},{name:'Cognome'}];
  pagedData: PagedData<Paziente> = new PagedData<Paziente>();

  constructor(private pazientiSvc: PazientiService, private router: Router) {

  }

  ngOnInit() {
    this.page.pageNumber = 0;
    this.page.size = 10;
    this.pageChanged(this.page);
  }

  pageChanged(page: Page){
    this.pazientiSvc.getPazientiResults(this.page)
      .subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });    
  }
}
