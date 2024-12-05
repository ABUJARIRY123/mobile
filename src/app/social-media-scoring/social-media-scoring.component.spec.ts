import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaScoringComponent } from './social-media-scoring.component';

describe('SocialMediaScoringComponent', () => {
  let component: SocialMediaScoringComponent;
  let fixture: ComponentFixture<SocialMediaScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaScoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
