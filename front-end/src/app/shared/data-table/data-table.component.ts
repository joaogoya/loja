import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.dataHandlig(this.infos.data);
  }

  public dataHandlig(infos) {
      this.atributes = Object.keys(infos[0]);
      infos.forEach(element => {
        this.data.push(Object.values(element));
      });
  }
}
