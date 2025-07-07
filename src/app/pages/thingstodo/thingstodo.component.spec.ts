import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingstodoComponent } from './thingstodo.component';

describe('ThingstodoComponent', () => {
  let component: ThingstodoComponent;
  let fixture: ComponentFixture<ThingstodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThingstodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThingstodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
