import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRockComponent } from './child-rock.component';

describe('ChildRockComponent', () => {
  let component: ChildRockComponent;
  let fixture: ComponentFixture<ChildRockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildRockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
