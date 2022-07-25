import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './nav/post';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  fakeUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  fakeUrl_2 = 'https://jsonplaceholder.typicode.com/posts';
  prismic = "https://myangularapp062002.cdn.prismic.io/api/v2/documents/search?ref=YtR-jxAAACIACSa2&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YtR-fxAAAB8ACSZr%22%29+%5D%5D"

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any>{
    
  //  return this.http.get<{[key: string]: Post}>(this.prismic)
  return this.http.get(this.prismic)
}
}
