import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPanelComponent } from './favorites-panel.component';

describe('FavoritesPanelComponent', () => {
  let component: FavoritesPanelComponent;
  let fixture: ComponentFixture<FavoritesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
