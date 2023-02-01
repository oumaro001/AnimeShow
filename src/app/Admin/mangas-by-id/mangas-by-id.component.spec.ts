import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasByIdComponent } from './mangas-by-id.component';

describe('MangasByIdComponent', () => {
  let component: MangasByIdComponent;
  let fixture: ComponentFixture<MangasByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangasByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
