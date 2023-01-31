import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostProviderComponent } from './form-post-provider.component';

describe('FormPostProviderComponent', () => {
  let component: FormPostProviderComponent;
  let fixture: ComponentFixture<FormPostProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
