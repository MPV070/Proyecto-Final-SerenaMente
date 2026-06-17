import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface InstaPost {
  id: string;
  media_type: string;
  media_url: string;
  caption?: string;
  timestamp?: string | number;
}

@Injectable({ providedIn: 'root' })
export class InstagramService {
  private base = '/api_sample.json';

  constructor(private http: HttpClient) {}

  fetchPosts(username: string): Observable<InstaPost[]> {
    return this.http.get<any>(this.base).pipe(
      map(res => {
        const list = res?.posts || res?.data || res?.items || res || [];
        if (!Array.isArray(list)) return [];
        return list.map((p: any) => ({
          id: p.id ?? p.pk ?? (p.node && p.node.id) ?? '',
          media_type: (p.media_type || p.type || (p.node && p.node.is_video ? 'VIDEO' : 'IMAGE') || '').toString().toUpperCase(),
          media_url: p.media_url || p.media_url_https || p.url || p.node?.video_url || p.node?.display_url || p.node?.thumbnail_src || '',
          caption: p.caption || p.title || p.edge_media_to_caption?.edges?.[0]?.node?.text || '',
          timestamp: p.timestamp || p.taken_at_timestamp || p.node?.taken_at_timestamp || ''
        }));
      }),
      catchError(() => of([]))
    );
  }
}
