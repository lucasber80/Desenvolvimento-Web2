import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlaylistComponent } from './lista-playlist.component';

describe('ListaPlaylistComponent', () => {
  let component: ListaPlaylistComponent;
  let fixture: ComponentFixture<ListaPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
