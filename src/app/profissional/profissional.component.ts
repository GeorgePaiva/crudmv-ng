import { Component, OnInit } from '@angular/core';
import { ApiProf } from '../../service/profissional.service';
import { Profissional } from 'src/model/profissional';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'endereco', 'telefone'];
  dataSource: Profissional[];
  isLoadingResults: boolean;

  constructor(private _apiProf: ApiProf) { }

  ngOnInit() {
    this._apiProf.getProfissionais()
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
