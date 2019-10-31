import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { BroadcastService } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  /* ========================================================>>> attribute declaration */

  /*VIEW FLAGAS/INTERACT*/
  public spinner = true;
  public success = false;
  public error = {
    name: '',
    message: ''
  };

  /*DATA*/
  public infos;
  public atributes;
  public data = [];

  /*PAGINATION*/
  public page = 1;
  public pageSize = 10;

  /*search box*/
  public term = '';
  public hasResult = false;
  public search = false;
  @ViewChild('inputSearchBar', {static: true}) inputSearchBar;
  /* ========================================================>>> end of attribute declaration */

  constructor( private broadcast: BroadcastService ) {}

  ngOnInit() {
    this.broadcast.emitData.subscribe( infos => {
      this.infos = infos;
      this.dataHandling(infos);
    });
  }

  public dataHandling(infos) {
    if (infos.success) {
      this.successHndling(infos.data);
    } else {
      this.errorRandling(infos.error);
    }
  }

  public successHndling(values) {

    /* change an aarraof objs in to two arrays of strings  */
    this.atributes = Object.keys(values[0]);
    values.forEach(element => {
      this.data.push(Object.values(element));
    });

    // flags
    this.spinner = false;
    this.success = true;
  }

  public errorRandling(err) {
    this.error.name = err.name;
    this.error.message = err.message;
    this.spinner = false;
  }

  public reload() {
    this.hasResult = true;
    this.inputSearchBar.nativeElement.value = '';
    this.successHndling(this.infos.data);
  }

  /*==========================================>>> Searchbar <<<<=====*/
  public searchBar(event) {
    const term = event.target.value;

     // check if search bar is not empty
    const isEempty = term === undefined || term.trim() === '';
    if (isEempty === false) {

      // pre sets
      this.search = true;
      this.term = term;
      let arrayTemp = [];
      const backspace = event.keyCode === 8;

      // if backspace, reset this.data
      if (backspace) {
        this.data = [];
        this.infos.data.forEach(element => {
          this.data.push(Object.values(element));
        });
      }

      // search/filter
      this.data.forEach(item => {
        item.forEach(element => {
          if (element.toString().includes(term)) {
            arrayTemp.push(item);
          }
        });
      });

      // remove duplicate data
      arrayTemp = arrayTemp.filter((item, pos) => {
        return arrayTemp.indexOf(item) === pos;
      });

      // handle informations to output
      if (arrayTemp.length > 0) {
        this.data = [];
        this.data = arrayTemp;
        this.hasResult = true;
      } else {
        this.data = [];
        this.hasResult = false;
      }
    }
  }
  /*==========================================>>> End of Searchbar <<<<=====*/

  public tableSorting(index) {

    // array obj to array of arrays
    let result = this.infos.data.map(Object.values);

    // sort
    result = result.sort((a, b) => {
      if (a[index] < b[index]) {
        return -1;
      }
      if (a[index] > b[index]) {
        return 1;
      }
      return 0;
    });

    // handle informations to output
    this.data = [];
    result.forEach(element => {
      this.data.push(Object.values(element));
    });
  }
}
