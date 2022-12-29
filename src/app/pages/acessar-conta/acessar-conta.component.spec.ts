import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessarContaComponent } from './acessar-conta.component';

describe('AcessarContaComponent', () => {
  let component: AcessarContaComponent;
  let fixture: ComponentFixture<AcessarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessarContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
