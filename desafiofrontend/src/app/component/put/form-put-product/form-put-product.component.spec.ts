import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPutProductComponent } from './form-put-product.component';

describe('FormPutProductComponent', () => {
  let component: FormPutProductComponent;
  let fixture: ComponentFixture<FormPutProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPutProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
