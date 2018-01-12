import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialFormInformationComponent } from './confidential-form-information.component';

describe('ConfidentialFormInformationComponent', () => {
  let component: ConfidentialFormInformationComponent;
  let fixture: ComponentFixture<ConfidentialFormInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialFormInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialFormInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
