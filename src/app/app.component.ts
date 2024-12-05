import { Component } from '@angular/core';
import { SocialMediaScoringComponent } from './social-media-scoring/social-media-scoring.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SocialMediaScoringComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'socialmedia';

  // Method to update the parent title
  updateParentTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
