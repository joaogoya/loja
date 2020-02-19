import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {

  @Input() data;
  @Input() atributes;

  public page = 1;
  public pageSize = 10;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDelete = new EventEmitter();

  public size = 0;

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
