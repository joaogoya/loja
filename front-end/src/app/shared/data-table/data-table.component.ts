import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"]
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
  public term = "";
  public hasResult = false;
  public search = false;
  @ViewChild('inputSearchBar', {static: true}) inputSearchBar;
  constructor() {}

  ngOnInit() {
    this.dataHandlig();
    this.tableSorting();
  }

  public dataHandlig() {
    this.atributes = Object.keys(this.infos.data[0]);
    this.infos.data.forEach(element => {
      this.data.push(Object.values(element));
    });
  }

  public searchBar(event) {
    const term = event.target.value;

     // se a barra de pesquisa estiver populada
    const isEempty = term === undefined || term.trim() === '';
    if (isEempty === false) {

      // pre sets
      this.search = true;
      this.term = term;
      let arrayTemp = [];
      const backspace = event.keyCode === 8;

      // se backspace, reseta this.data
      if(backspace){
        this.data = [];
        this.infos.data.forEach(element => {
          this.data.push(Object.values(element));
        });
      }

      // filtra
      this.data.forEach(item => {
        item.forEach(element => {
          if (element.toString().includes(term)) {
            arrayTemp.push(item);
          }
        });
      });

      // remove duplicados
      arrayTemp = arrayTemp.filter((item, pos) => {
        return arrayTemp.indexOf(item) === pos;
      });

      // trata informação para a saída
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
    this.dataHandlig();
  }

  public tableSorting() {
    function Comparator(a, b) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    }
    let myArray = [
      [1, "alfred", "..."],
      [23, "berta", "..."],
      [2, "zimmermann", "..."],
      [4, "albert", "..."]
    ];
    myArray = myArray.sort(Comparator);
    console.log(myArray);
  }
}
