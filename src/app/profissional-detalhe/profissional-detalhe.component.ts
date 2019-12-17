import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiProf } from 'src/service/profissional.service';
import { Profissional } from 'src/model/profissional';

@Component({
  selector: 'app-profissional-detalhe',
  templateUrl: './profissional-detalhe.component.html',
  styleUrls: ['./profissional-detalhe.component.css']
})

export class ProfissionalDetalheComponent implements OnInit {
  profissional: Profissional = {
    _id: '',
    nome_profissional: '',
    endereco_profissional: '',
    telefone_profissional: '',
    dt_atualizacao: null
  };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private _apiProf: ApiProf) { }


  ngOnInit() {
    this.getProfissional(this.route.snapshot.params['id']);
  }

  getProfissional(id) {
    this._apiProf.getProfissional(id)
      .subscribe(data => {
        this.profissional = data;
        console.log(this.profissional);
        this.isLoadingResults = false;
      });
  }

  deleteProfissional(id) {
    this.isLoadingResults = true;
    this._apiProf.deleteProfissional(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/profissional']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }
}
