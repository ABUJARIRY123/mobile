import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-social-media-scoring', // Ensure this matches the used tag
  templateUrl: './social-media-scoring.component.html',
  styleUrls: ['./social-media-scoring.component.css'],
  standalone: true, // Ensure this is present
})
export class SocialMediaScoringComponent {
  // Sample data for posts
  posts = [
    { id: 'Post1', likes: 10, shares: 5, comments: 20 },
    { id: 'Post2', likes: 15, shares: 7, comments: 10 },
    { id: 'Post3', likes: 12, shares: 8, comments: 15 },
  ];

  // Top post initialized as null
  topPost: { id?: string; score?: number; comments?: number } | null = null;

  // Method to calculate and find the top post
  findTopPost() {
    let maxScore = -1;
    let maxPostIndex = -1;

    this.posts.forEach((post, index) => {
      const score = post.likes * 2 + post.shares * 3 + post.comments * 1;
      if (score > maxScore || (score === maxScore && index < maxPostIndex)) {
        maxScore = score;
        maxPostIndex = index;
      }
    });

    this.topPost = {
      id: this.posts[maxPostIndex].id,
      score: maxScore,
    };
  }
}
