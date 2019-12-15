import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-profissional-novo',
  templateUrl: './profissional-novo.component.html',
  styleUrls: ['./profissional-novo.component.css']
})
export class ProfissionalNovoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
