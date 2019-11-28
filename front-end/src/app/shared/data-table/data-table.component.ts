import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Router } from '@angular/router';

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
  public showMenu = true;

  /*DATA*/
  public infos;
  public atributes;
  public data = [];
  @Input() component;

  /* delete item */
  public showDelteModal = false;
  public itemToDelete = {
    component: '',
    data: ''
  };

  /*PAGINATION*/
  public page = 1;
  public pageSize = 10;

  /*search box*/
  public term = '';
  public hasResult = false;
  public search = false;
  @ViewChild('inputSearchBar', {static: true}) inputSearchBar;
  /* ========================================================>>> end of attribute declaration */

  constructor(
    private utilsService: UtilsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getData();
    this.closeModalSubscriber();
  }

  public getData() {
    const storeddInfos = localStorage.getItem('data' + this.component);
    this.infos = JSON.parse(storeddInfos);
    this.itemToDelete.component = this.infos.component;
    this.dataHandling(this.infos);
  }

  public dataHandling(infos) {
    if (infos.success) {
      this.successHndling(infos.data);
    } else {
      this.errorRandling(infos.error);
    }
  }

  public successHndling(values) {

    /* change an aarraof objs into two arrays of strings */
    this.data = [];
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

  public btnNew() {
    this.router.navigate([this.component + '/form']);
  }

  public onDelete(item: any) {
    this.showDelteModal = true;
    this.itemToDelete.data = item;
  }

  public closeModalSubscriber() {
    this.utilsService.closeModal.subscribe(e => {
      this.showDelteModal = e;
    });
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

  public reload() {
    this.hasResult = true;
    this.inputSearchBar.nativeElement.value = '';
    this.successHndling(this.infos.data);
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
