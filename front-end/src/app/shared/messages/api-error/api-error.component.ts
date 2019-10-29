import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.component.html',
  styleUrls: ['./api-error.component.scss']
})
export class ApiErrorComponent implements OnInit {

  @Input() errorInfos;

  constructor() { }

  ngOnInit() {
    console.log('erro');
    console.log(this.errorInfos);
  }

}
