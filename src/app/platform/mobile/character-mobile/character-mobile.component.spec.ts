import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMobileComponent } from './character-mobile.component';

describe('CharacterMobileComponent', () => {
  let component: CharacterMobileComponent;
  let fixture: ComponentFixture<CharacterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
