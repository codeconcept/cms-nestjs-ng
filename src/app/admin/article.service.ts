import { Injectable } from '@angular/core';
import { Article } from './../models/article';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseURL = 'http://localhost:3000/articles';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createArticle(article: Article) {
    return this.httpClient.post<Article>(this.baseURL, article);
  }

  deleteArticle(article: Article) {
    const fullURL = `${this.baseURL}/${article._id}`;
    return this.httpClient.delete<Article>(fullURL, this.httpHeaders);
  }
}
