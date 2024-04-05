import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCharacterMobileComponent } from './details-character-mobile.component';

describe('DetailsCharacterMobileComponent', () => {
  let component: DetailsCharacterMobileComponent;
  let fixture: ComponentFixture<DetailsCharacterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCharacterMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCharacterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
