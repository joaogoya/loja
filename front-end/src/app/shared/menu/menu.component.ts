import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor( private utilsService: UtilsService ) { }

  public showMenu = false;

  ngOnInit() {
    this.utilsService.loggerdUser.subscribe( e => {
      this.showMenu = true;
    });
  }

  ngOnDestroy() {
    this.utilsService.loggerdUser.unsubscribe();
  }
}
