import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLackComponent } from './stock-lack.component';

describe('StockLackComponent', () => {
  let component: StockLackComponent;
  let fixture: ComponentFixture<StockLackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockLackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
