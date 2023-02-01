import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLackByProviderComponent } from './stock-lack-by-provider.component';

describe('StockLackByProviderComponent', () => {
  let component: StockLackByProviderComponent;
  let fixture: ComponentFixture<StockLackByProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLackByProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockLackByProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
