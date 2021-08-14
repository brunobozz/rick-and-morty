import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCharactersComponent } from './page-characters.component';

describe('PageCharactersComponent', () => {
  let component: PageCharactersComponent;
  let fixture: ComponentFixture<PageCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
