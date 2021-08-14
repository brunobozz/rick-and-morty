import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCharacterComponent } from './page-character.component';

describe('PageCharacterComponent', () => {
  let component: PageCharacterComponent;
  let fixture: ComponentFixture<PageCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
