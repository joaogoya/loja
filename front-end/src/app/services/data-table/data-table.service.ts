import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  public emitData = new EventEmitter();

  constructor() {}

  /* components send data do the dataTable */
  public dataComunication(infos) {
    this.emitData.emit(infos);
  }
}
