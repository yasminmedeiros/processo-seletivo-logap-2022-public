import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostProductsComponent } from './form-post-products.component';

describe('FormPostProductsComponent', () => {
  let component: FormPostProductsComponent;
  let fixture: ComponentFixture<FormPostProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
