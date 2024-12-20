import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellPerLevelComponent } from './spell-per-level.component';

describe('SpellPerLevelComponent', () => {
  let component: SpellPerLevelComponent;
  let fixture: ComponentFixture<SpellPerLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellPerLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpellPerLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
