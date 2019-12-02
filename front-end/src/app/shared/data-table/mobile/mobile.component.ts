import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  @Input() data;
  @Input() atributes;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete = new EventEmitter();

  public page = 1;
  public pageSize = 10;

  constructor() { }

  ngOnInit() {
  }

  public btnEdit(item) {
    this.onEdit.emit(item);
  }

  public btnDelete(item) {
    this.onDelete.emit(item);
  }

}
