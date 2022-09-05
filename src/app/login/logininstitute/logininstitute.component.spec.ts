import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininstituteComponent } from './logininstitute.component';

describe('LogininstituteComponent', () => {
  let component: LogininstituteComponent;
  let fixture: ComponentFixture<LogininstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininstituteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogininstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
