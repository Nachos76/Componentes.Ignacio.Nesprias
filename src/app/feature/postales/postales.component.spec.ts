import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalesComponent } from './postales.component';

describe('PostalesComponent', () => {
  let component: PostalesComponent;
  let fixture: ComponentFixture<PostalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
