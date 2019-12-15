import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-profissional-editar',
  templateUrl: './profissional-editar.component.html',
  styleUrls: ['./profissional-editar.component.css']
})
export class ProfissionalEditarComponent implements OnInit {
  _id: String = '';
  profissionalForm: FormGroup;
  nome_profissional: String = '';
  endereco_profissional: String = '';
  telefone_profissional: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProfissional(this.route.snapshot.params['id']);
    this.profissionalForm = this.formBuilder.group({
      'nome_profissional': [null, Validators.required],
      'endereco_profissional': [null, Validators.required],
      'telefone_profissional': [null, Validators.required]
    });
  }

  getProfissional(id) {
    this.api.getProfissional(id).subscribe(data => {
      this._id = data._id;
      this.profissionalForm.setValue({
        nome_profissional: data.nome_profissional,
        endereco_profissional: data.endereco_profissional,
        telefone_profissional: data.telefone_profissional
      });
    });
  }

  updateProfissional(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateProfissional(this._id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/profissional-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

}
