import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoEditarComponent } from './estabelecimento-editar.component';

describe('EstabelecimentoEditarComponent', () => {
  let component: EstabelecimentoEditarComponent;
  let fixture: ComponentFixture<EstabelecimentoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabelecimentoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabelecimentoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
