import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/model/estabelecimento';
import { ApiEstabelecimento } from 'src/service/estabelecimento.service';


@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'endereco', 'telefone'];
  dataSource: Estabelecimento[];
  isLoadingResults: boolean;

  constructor(private _apiEst: ApiEstabelecimento) { }

  ngOnInit() {
    this._apiEst.getEstabelecimentos()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
