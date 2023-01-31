import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAllProviderComponent } from './table-all-provider.component';

describe('TableAllProviderComponent', () => {
  let component: TableAllProviderComponent;
  let fixture: ComponentFixture<TableAllProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAllProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAllProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
