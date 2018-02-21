import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListageComponent } from './listage.component';

describe('ListageComponent', () => {
  let component: ListageComponent;
  let fixture: ComponentFixture<ListageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
