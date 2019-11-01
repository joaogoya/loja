import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public emitData = new EventEmitter();

  constructor() { }

  public dataComunication(infos) {
    this.emitData.emit(infos);
  }
}
