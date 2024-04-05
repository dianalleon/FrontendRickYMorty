import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterMobileComponent } from './list-character-mobile.component';

describe('ListCharacterMobileComponent', () => {
  let component: ListCharacterMobileComponent;
  let fixture: ComponentFixture<ListCharacterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
