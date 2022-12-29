import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarProdutosComponent } from './gerenciar-produtos.component';

describe('GerenciarProdutosComponent', () => {
  let component: GerenciarProdutosComponent;
  let fixture: ComponentFixture<GerenciarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
