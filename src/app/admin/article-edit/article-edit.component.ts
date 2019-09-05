import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../article.service';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  @Input() article: Article;
  articleForm: FormGroup;
  response$ = null;
  error = null;
  @Output() articleUpdate: EventEmitter<Article> = new EventEmitter();

  constructor(private fb: FormBuilder, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: [this.article.title, Validators.required],
      content: [this.article.content, [Validators.required, Validators.minLength(4)]]
    });
  }


  get title() {
    return this.articleForm.get('title');
  }

  get content() {
    return this.articleForm.get('content');
  }

  async submit() {
    this.error = null;
    this.response$ = await this.articleService
      .updateArticle(this.article._id, this.articleForm.value)
      .pipe(
        tap(updatedArticle => this.articleUpdate.emit(updatedArticle)),
        catchError(error => {
          this.error = error;
          return EMPTY;
        })
      );
  }

}
