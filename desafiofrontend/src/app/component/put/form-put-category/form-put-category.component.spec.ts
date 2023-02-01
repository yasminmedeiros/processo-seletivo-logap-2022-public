import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPutCategoryComponent } from './form-put-category.component';

describe('FormPutCategoryComponent', () => {
  let component: FormPutCategoryComponent;
  let fixture: ComponentFixture<FormPutCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPutCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
