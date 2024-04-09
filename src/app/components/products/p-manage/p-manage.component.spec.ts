import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PManageComponent } from './p-manage.component';

describe('PManageComponent', () => {
  let component: PManageComponent;
  let fixture: ComponentFixture<PManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PManageComponent]
    });
    fixture = TestBed.createComponent(PManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
