import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService, Tag } from '../../services/mock-data.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() selectedTagIds: number[] = [];
  @Input() maxTags: number = 3;
  @Output() selectedTagsChange = new EventEmitter<Tag[]>();
  
  tags: Tag[] = [];

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    this.tags = this.mockService.getTags();
  }

  toggleTag(tag: Tag): void {
    const index = this.selectedTagIds.indexOf(tag.id);
    if (index > -1) {
      // Deseleccionar si ya está seleccionada
      const updatedIds = this.selectedTagIds.filter(id => id !== tag.id);
      this.emitSelectedTags(updatedIds);
    } else if (this.selectedTagIds.length < this.maxTags) {
      // Seleccionar si no supera el máximo
      const updatedIds = [...this.selectedTagIds, tag.id];
      this.emitSelectedTags(updatedIds);
    }
  }

  isTagSelected(tagId: number): boolean {
    return this.selectedTagIds.includes(tagId);
  }

  private emitSelectedTags(updatedIds: number[]): void {
    const selectedTags = this.tags.filter(tag => updatedIds.includes(tag.id));
    this.selectedTagsChange.emit(selectedTags);
  }

  getTagsByIds(ids: number[]): Tag[] {
    return this.tags.filter(tag => ids.includes(tag.id));
  }
}
