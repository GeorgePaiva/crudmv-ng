import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
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

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getEstabelecimento(this.route.snapshot.params['id']);
  }

  getEstabelecimento(id) {
    this.api.getEstabelecimento(id)
      .subscribe(data => {
        this.estabelecimento = data;
        console.log(this.estabelecimento);
        this.isLoadingResults = false;
      });
  }

  deleteEstabelecimento(id) {
    this.isLoadingResults = true;
    this.api.deleteEstabelecimento(id)
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
