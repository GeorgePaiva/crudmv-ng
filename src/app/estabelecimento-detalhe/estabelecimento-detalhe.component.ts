import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiEstabelecimento } from 'src/service/estabelecimento.service';
import { Estabelecimento } from 'src/model/estabelecimento';

@Component({
  selector: 'app-estabelecimento-detalhe',
  templateUrl: './estabelecimento-detalhe.component.html',
  styleUrls: ['./estabelecimento-detalhe.component.css']
})
export class EstabelecimentoDetalheComponent implements OnInit {

  estabelecimento: Estabelecimento = {
    _id: '',
    nome_estabelecimento: '',
    endereco_estabelecimento: '',
    telefone_estabelecimento: '',
    dt_atualizacao: null
  };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private _apiEst: ApiEstabelecimento) { }


  ngOnInit() {
    this.getEstabelecimento(this.route.snapshot.params['id']);
  }

  getEstabelecimento(id) {
    this._apiEst.getEstabelecimento(id)
      .subscribe(data => {
        this.estabelecimento = data;
        console.log(this.estabelecimento);
        this.isLoadingResults = false;
      });
  }

  deleteEstabelecimento(id) {
    this.isLoadingResults = true;
    this._apiEst.deleteEstabelecimento(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/estabelecimento']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

}
