import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashFormComponent } from './wash-form.component';

describe('WashFormComponent', () => {
  let component: WashFormComponent;
  let fixture: ComponentFixture<WashFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
