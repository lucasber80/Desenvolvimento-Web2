import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMusicaComponent } from './busca-musica.component';

describe('BuscaMusicaComponent', () => {
  let component: BuscaMusicaComponent;
  let fixture: ComponentFixture<BuscaMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
