import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ProfissionalDetalheComponent } from './profissional-detalhe/profissional-detalhe.component';
import { ProfissionalNovoComponent } from './profissional-novo/profissional-novo.component';
import { ProfissionalEditarComponent } from './profissional-editar/profissional-editar.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { EstabelecimentoDetalheComponent } from './estabelecimento-detalhe/estabelecimento-detalhe.component';
import { EstabelecimentoNovoComponent } from './estabelecimento-novo/estabelecimento-novo.component';
import { EstabelecimentoEditarComponent } from './estabelecimento-editar/estabelecimento-editar.component';

const routes: Routes = [
  {
    path: 'profissional',
    component: ProfissionalComponent,
    data: { title: 'Lista de Profissionais' }
  },
  {
    path: 'profissional-detalhe/:id',
    component: ProfissionalDetalheComponent,
    data: { title: 'Detalhe do Profissional' }
  },
  {
    path: 'profissional-novo',
    component: ProfissionalNovoComponent,
    data: { title: 'Adicionar Profissional' }
  },
  {
    path: 'profissional-editar/:id',
    component: ProfissionalEditarComponent,
    data: { title: 'Editar o Profissional' }
  },
  {
    path: '',
    redirectTo: '/profissional',
    pathMatch: 'full'
  },
  {
    path: 'estabelecimento',
    component: EstabelecimentoComponent,
    data: { title: 'Lista de Estabelecimento' }
  },
  {
    path: 'estabelecimento-detalhe/:id',
    component: EstabelecimentoDetalheComponent,
    data: { title: 'Detalhe do Estabelecimento' }
  },
  {
    path: 'estabelecimento-novo',
    component: EstabelecimentoNovoComponent,
    data: { title: 'Adicionar Estabelecimento' }
  },
  {
    path: 'estabelecimento-editar/:id',
    component: EstabelecimentoEditarComponent,
    data: { title: 'Editar o Estabelecimento' }
  },
  {
    path: '',
    redirectTo: '/estabelecimento',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
