import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss']
})
export class FeedComponent implements OnInit {

  videos: any[] = [];
  currentIndex: number = 0;

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    // Aquí luego llamar al backend
    this.videos = [
      {
        url: 'assets/videos/ansiedad1.mp4',
        professionalName: 'Laura Martínez',
        description: 'Cómo gestionar la ansiedad en 60 segundos.',
        tags: ['ansiedad', 'respiración', 'calma']
      },
      {
        url: 'assets/videos/autoestima1.mp4',
        professionalName: 'Carlos López',
        description: '3 claves para mejorar tu autoestima.',
        tags: ['autoestima', 'motivación']
      }
    ];
  }

  nextVideo() {
    if (this.currentIndex < this.videos.length - 1) {
      this.currentIndex++;
    }
  }
}
