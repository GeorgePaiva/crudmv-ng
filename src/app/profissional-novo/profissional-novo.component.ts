import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiProf } from 'src/service/profissional.service';


@Component({
  selector: 'app-profissional-novo',
  templateUrl: './profissional-novo.component.html',
  styleUrls: ['./profissional-novo.component.css']
})
export class ProfissionalNovoComponent implements OnInit {

  profissionalForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private _apiProf: ApiProf, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profissionalForm = this.formBuilder.group({
      'nome_profissional': [null, Validators.required],
      'endereco_profissional': [null, [Validators.required]],
      'telefone_profissional': [null, Validators.required]
    });

  }

  addProfissional(form: NgForm) {
    this.isLoadingResults = true;
    this._apiProf.addProfissional(form)
      .subscribe(res => {
        const id = res['_id'];
        this.isLoadingResults = false;
        this.router.navigate(['/profissional-novo', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
