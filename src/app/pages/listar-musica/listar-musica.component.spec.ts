import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMusicaComponent } from './listar-musica.component';

describe('ListarMusicaComponent', () => {
  let component: ListarMusicaComponent;
  let fixture: ComponentFixture<ListarMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
