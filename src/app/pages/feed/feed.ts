import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InstagramService, InstaPost } from '../../services/instagram.service';
import { FeedNavbarComponent } from '../../components/feed-navbar/feed-navbar';

interface MockUser {
  email: string;
  name: string;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FeedNavbarComponent],

  templateUrl: './feed.html',
  styleUrls: ['./feed.scss']
})
export class FeedComponent implements OnInit {

  videos: any[] = [];
  currentIndex = 0;
  user: MockUser | null = null;
  instagramError = false;

  constructor(private instagram: InstagramService) {}

  ngOnInit() {
    this.loadUser();
    this.loadVideos();
    this.loadInstagram();
  }

  loadUser() {
    const stored = localStorage.getItem('mockUser');
    if (stored) {
      try {
        this.user = JSON.parse(stored) as MockUser;
      } catch {
        this.user = null;
      }
    }
  }

  loadVideos() {
    this.videos = [
      {
        url: 'assets/videos/ansiedad1.mp4',
        professionalName: 'Laura Martínez',
        description: 'Cómo gestionar la ansiedad en 60 segundos.',
        tags: ['ansiedad', 'respiración', 'calma'],
        isVideo: true
      },
      {
        url: 'assets/videos/autoestima1.mp4',
        professionalName: 'Carlos López',
        description: '3 claves para mejorar tu autoestima.',
        tags: ['autoestima', 'motivación'],
        isVideo: true
      }
    ];
  }

  loadInstagram() {
    const username = 'serenamenteapp2026';
    this.instagram.fetchPosts(username).subscribe((posts: InstaPost[]) => {
      this.instagramError = false;
      const mapped = (posts || []).map(p => ({
        url: p.media_url,
        professionalName: 'Instagram',
        description: p.caption || '',
        tags: [],
        isVideo: (p.media_type || '').toUpperCase() === 'VIDEO',
        id: p.id,
        timestamp: p.timestamp
      })).filter(m => !!m.url);
      this.videos = this.videos.concat(mapped);
    }, () => {
      this.instagramError = true;
    });
  }

  nextVideo() {
    if (this.currentIndex < this.videos.length - 1) {
      this.currentIndex++;
    }
  }
}
