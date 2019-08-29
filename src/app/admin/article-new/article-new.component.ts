import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  articleForm: FormGroup = this.fb.group({
    articleTitle: [''],
    articleContent: ['']
  });

  ngOnInit() {
  }

  submit() {
    console.log('article / submit', this.articleForm.value);
  }

}
