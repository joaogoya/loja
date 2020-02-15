import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  @Input('success') toasterSuccess;

  constructor(
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    this.toasterSuccess ? this.showSuccess() : this.showError();
  }

  public showSuccess() {
    this.toastr.success(
      'Ação realizada com sucesso.',
      'Sucesso.',
      {
        progressBar: true,
        timeOut: 1800
      }
    );
  }

  public showError() {
    this.toastr.error(
      'Houve um erro. Contate o administrador do sistema',
      'Erro.',
      {
        progressBar: true,
        timeOut: 2200
      }
    );
    this.router.navigate(['/error']);
  }
}
