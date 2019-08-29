import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  articleForm: FormGroup = this.fb.group({
    articleTitle: ['', Validators.required],
    articleContent: ['', [Validators.required, Validators.minLength(4)]]
  });

  ngOnInit() {
  }

  get articleTitle() {
    return this.articleForm.get('articleTitle');
  }

  get articleContent() {
    return this.articleForm.get('articleContent');
  }

  submit() {
    console.log('article / submit', this.articleForm.value);
  }

}
