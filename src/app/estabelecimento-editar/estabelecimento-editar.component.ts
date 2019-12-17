import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiEstabelecimento } from 'src/service/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-editar',
  templateUrl: './estabelecimento-editar.component.html',
  styleUrls: ['./estabelecimento-editar.component.css']
})
export class EstabelecimentoEditarComponent implements OnInit {

  _id: String = '';
  estabelecimentoForm: FormGroup;
  nome_estabelecimento: String = '';
  endereco_estabelecimento: String = '';
  telefone_estabelecimento: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private _apiEst: ApiEstabelecimento, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEstabelecimento(this.route.snapshot.params['id']);
    this.estabelecimentoForm = this.formBuilder.group({
      'nome_estabelecimento': [null, Validators.required],
      'endereco_estabelecimento': [null, Validators.required],
      'telefone_estabelecimento': [null, Validators.required]
    });
  }

  getEstabelecimento(id) {
    this._apiEst.getEstabelecimento(id).subscribe(data => {
      this._id = data._id;
      this.estabelecimentoForm.setValue({
        nome_estabelecimento: data.nome_estabelecimento,
        endereco_estabelecimento: data.endereco_estabelecimento,
        telefone_estabelecimento: data.telefone_estabelecimento
      });
    });
  }

  updateEstabelecimento(form: NgForm) {
    this.isLoadingResults = true;
    this._apiEst.updateEstabelecimento(this._id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/estabelecimento-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

}
