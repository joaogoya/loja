import { UtilsService } from 'src/app/services/utils/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }


}
