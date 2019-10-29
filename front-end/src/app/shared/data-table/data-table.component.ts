import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  /*DATA*/
  @Input() infos;
  public atributes;
  public data = [];

  /*PAGINATION*/
  public page = 1;
  public pageSize = 10;

  /*search box*/
  public term = '';
  public hasResult = false;
  public search = false;

  constructor() { }

  ngOnInit() {
    this.dataHandlig();
  }

  public dataHandlig() {
      this.atributes = Object.keys(this.infos.data[0]);
      this.infos.data.forEach(element => {
        this.data.push(Object.values(element));
      });
  }

  public searchBar(term) {
    this.search = true;
    this.term = term;
    const arrayTemp  = [];
    this.data.forEach(item => {
      item.forEach(element => {
        if(element.toString().includes(term)) {
          arrayTemp.push(item);
        }
      });
    });
    if (arrayTemp.length > 0) {
      this.data = [];
      this.data = arrayTemp;
      this.hasResult = true;
    } else {
      this.data = [];
      this.hasResult = false;
    }
  }

  public reload(){
    this.hasResult = true;
    this.dataHandlig();
  }


}
