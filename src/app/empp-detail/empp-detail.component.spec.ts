import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppDetailComponent } from './empp-detail.component';

describe('EmppDetailComponent', () => {
  let component: EmppDetailComponent;
  let fixture: ComponentFixture<EmppDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmppDetailComponent]
    });
    fixture = TestBed.createComponent(EmppDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
