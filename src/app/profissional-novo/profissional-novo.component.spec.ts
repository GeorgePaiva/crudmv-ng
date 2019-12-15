import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalNovoComponent } from './profissional-novo.component';

describe('ProfissionalNovoComponent', () => {
  let component: ProfissionalNovoComponent;
  let fixture: ComponentFixture<ProfissionalNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
