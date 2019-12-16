import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ProfissionalDetalheComponent } from './profissional-detalhe/profissional-detalhe.component';
import { ProfissionalNovoComponent } from './profissional-novo/profissional-novo.component';
import { ProfissionalEditarComponent } from './profissional-editar/profissional-editar.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { EstabelecimentoDetalheComponent } from './estabelecimento-detalhe/estabelecimento-detalhe.component';
import { EstabelecimentoNovoComponent } from './estabelecimento-novo/estabelecimento-novo.component';
import { EstabelecimentoEditarComponent } from './estabelecimento-editar/estabelecimento-editar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfissionalListComponent } from './profissional-list/profissional-list.component';
import { EstabelecimentoListComponent } from './estabelecimento-list/estabelecimento-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    ProfissionalDetalheComponent,
    ProfissionalNovoComponent,
    ProfissionalEditarComponent,
    EstabelecimentoComponent,
    EstabelecimentoDetalheComponent,
    EstabelecimentoNovoComponent,
    EstabelecimentoEditarComponent,
    MenuComponent,
    ProfissionalListComponent,
    EstabelecimentoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
