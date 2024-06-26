import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: FavoritesCardComponent;
  let fixture: ComponentFixture<FavoritesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
