import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRockComponent } from './parent-rock.component';

describe('ParentRockComponent', () => {
  let component: ParentRockComponent;
  let fixture: ComponentFixture<ParentRockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentRockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
