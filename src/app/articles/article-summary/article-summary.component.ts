import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/admin/article.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css']
})
export class ArticleSummaryComponent implements OnInit {
  @Input() article: Article;
  isWaitingForServerResponse = false;
  error = null;
  isInEditMode = false;
  @Output() deleteSuccess = new EventEmitter<boolean>();

  constructor(private articleService: ArticleService, public authService: AuthService) { }

  ngOnInit() {
  }

  delete(article: Article) {
    this.isWaitingForServerResponse = true;
    this.articleService
      .deleteArticle(article)
      .pipe(
        catchError(this.handleError)
      ).subscribe(
        data => {
          // just to emulate network latence
          setTimeout(() => {
            this.isWaitingForServerResponse = false;
            this.handleSuccess(data);
          }, 2000);
        },
        err => {
          this.isWaitingForServerResponse = false;
          this.handleError(err);
        }
      );
  }

  toggleReadMode() {
    this.isInEditMode = !this.isInEditMode;
  }

  reloadArticle(article: Article) {
    console.log(article);
    this.article = article;
  }

  handleError(err) {
    // console.log(err);
    this.error = err;
    return throwError(this.error);
  }

  handleSuccess(data) {
    console.log('success !!', data);
    this.deleteSuccess.emit(true);

  }

}
