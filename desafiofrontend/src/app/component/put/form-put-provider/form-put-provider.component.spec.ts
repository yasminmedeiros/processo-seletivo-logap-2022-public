import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPutProviderComponent } from './form-put-provider.component';

describe('FormPutProviderComponent', () => {
  let component: FormPutProviderComponent;
  let fixture: ComponentFixture<FormPutProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPutProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPutProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
