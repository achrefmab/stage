import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SscategoriesComponent } from '@src/app/sscategories/sscategories.component';

describe('SscategoriesComponent', () => {
  let component: SscategoriesComponent;
  let fixture: ComponentFixture<SscategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SscategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
