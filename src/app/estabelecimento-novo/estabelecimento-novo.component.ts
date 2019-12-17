import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEstabelecimento } from 'src/service/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-novo',
  templateUrl: './estabelecimento-novo.component.html',
  styleUrls: ['./estabelecimento-novo.component.css']
})
export class EstabelecimentoNovoComponent implements OnInit {

  estabelecimentoForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private _apiEst: ApiEstabelecimento, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.estabelecimentoForm = this.formBuilder.group({
      'nome_estabelecimento': [null, Validators.required],
      'endereco_estabelecimento': [null, [Validators.required]],
      'telefone_estabelecimento': [null, Validators.required]
    });

  }

  addEstabelecimento(form: NgForm) {
    this.isLoadingResults = true;
    this._apiEst.addEstabelecimento(form)
      .subscribe(res => {
        const id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/estabelecimento-detalhe', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
