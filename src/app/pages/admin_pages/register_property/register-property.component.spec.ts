import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistePropertyComponent } from './register-property.component';

describe('RegisterPropertyComponent', () => {
  let component: RegistePropertyComponent;
  let fixture: ComponentFixture<RegistePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistePropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
