import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstituteComponentComponent } from './home-institute-component.component';

describe('HomeInstituteComponentComponent', () => {
  let component: HomeInstituteComponentComponent;
  let fixture: ComponentFixture<HomeInstituteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstituteComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInstituteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
