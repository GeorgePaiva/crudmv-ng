import { Component, OnInit } from '@angular/core';
import { ApiEstabelecimento } from 'src/service/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-list',
  templateUrl: './estabelecimento-list.component.html',
  styleUrls: ['./estabelecimento-list.component.css']
})
export class EstabelecimentoListComponent implements OnInit {
  estabelecimentos: Array<any>;

  constructor(private _apiEst: ApiEstabelecimento) { }

  ngOnInit() {
    this._apiEst.getEstabelecimentos().subscribe(data => {
      this.estabelecimentos = data;
    });
  }

}
