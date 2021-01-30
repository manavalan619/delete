import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrappComponent } from './bootstrapp.component';

describe('BootstrappComponent', () => {
  let component: BootstrappComponent;
  let fixture: ComponentFixture<BootstrappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
