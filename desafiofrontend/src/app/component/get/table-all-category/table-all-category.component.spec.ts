import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAllCategoryComponent } from './table-all-category.component';

describe('TableAllCategoryComponent', () => {
  let component: TableAllCategoryComponent;
  let fixture: ComponentFixture<TableAllCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAllCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAllCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
