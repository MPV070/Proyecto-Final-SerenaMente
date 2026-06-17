import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockDataService, Recommendation, Tag } from '../../services/mock-data.service';
import { FeedNavbarComponent } from '../../components/feed-navbar/feed-navbar';
import { ProfessionalCard } from '../../components/professional-card/professional-card';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [CommonModule, RouterModule, FeedNavbarComponent, ProfessionalCard],
  templateUrl: './recomendaciones.html',
  styleUrls: ['./recomendaciones.scss']
})
export class Recomendaciones implements OnInit {
  recommendations: Recommendation[] = [];
  professionals: any[] = [];
  allTags: Tag[] = [];
  selectedTags: Tag[] = [];
  userTags: Tag[] = [];

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    this.allTags = this.mockService.getTags();
    this.loadUserTags();
    this.loadRecommendations();
    this.professionals = this.mockService.getAllProfessionals();
  }

  loadUserTags(): void {
    const user = this.mockService.getUserProfile();
    if (user && user.tags && user.tags.length > 0) {
      this.userTags = user.tags;
      this.selectedTags = user.tags;
    }
  }

  loadRecommendations(): void {
    if (this.selectedTags.length > 0) {
      this.recommendations = this.mockService.getRecommendationsByTags(this.selectedTags);
    } else {
      this.recommendations = this.mockService.getRecommendationsByTags([]);
    }
  }

  toggleTag(tag: Tag): void {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.loadRecommendations();
  }

  getTagIcon(tagName: string): string {
    const tag = this.allTags.find(t => t.name.toLowerCase() === tagName.toLowerCase());
    return tag ? tag.icon : '\U0001F3F7\uFE0F';
  }

  getRecommendationIcon(type: string): string {
    switch (type) {
      case 'video': return '\U0001F3A5';
      case 'article': return '\U0001F4C4';
      case 'exercise': return '\U0001F3CB';
      default: return '\U0001F4CC';
    }
  }
}