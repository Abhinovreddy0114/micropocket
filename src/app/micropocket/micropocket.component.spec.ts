import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicropocketComponent } from './micropocket.component';

describe('MicropocketComponent', () => {
  let component: MicropocketComponent;
  let fixture: ComponentFixture<MicropocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicropocketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicropocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
