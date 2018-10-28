import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Page } from '../page';
import { Router } from '@angular/router';

@Component({
  selector: 'woa-grid',
  templateUrl: 'woa-grid.component.html',
  styleUrls: ['./woa-grid.component.scss']
})
export class WoaGridComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() showFilter: boolean = false;
  @Input() rows: any[];
  @Input() columns: any[];
  @Input() page: Page = new Page();
  filter: string = '';
  @Input() goToTemplate: string;
  loading: boolean = true;

  @Output() pageChanged = new EventEmitter();

  constructor(private router: Router) {
    this.page.pageNumber = 0;
    this.page.size = 100;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rows']) {
      console.log(changes['rows']);
      this.loading = changes['rows'].firstChange;
    }
  }

  setPage(pageInfo) {
    console.log(pageInfo)
    this.page.pageNumber = pageInfo.offset;
    this.page.filter = this.filter;
    this.pageChanged.emit(this.page);
    // this.pazientiSvc.getPazientiResults(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;
    //   this.rows = pagedData.data;
    // });
    //this.page = this.pagedData.page;
    //this.rows = this.pagedData.data;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected);
  }

  resetFilter() {
    this.filter = '';
    this.setPage({ offset: 0 });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filter = val;
    this.loading = true;
    console.log(val);
    this.setPage({ offset: 0 });
  }

  goToDetails(row) {
    console.log(this.goToTemplate);
    const ph = this.getPlaceholders(this.goToTemplate);
    let template = this.goToTemplate;
    ph.forEach(function (element) {
      let id = undefined;
      const prop = element.replace(/[\$\(\)]/g, '')
      eval('id = row.' + prop);
      if (id) {
        template = template.replace(element, row.id);
        console.log(template)
      }
    });
    this.router.navigate([template]);
  }

  getPlaceholders(input: string) {
    var regex = /\((\w+)\)/g;
    var found = input.match(regex);
    console.log(found);
    return found;
  }

}