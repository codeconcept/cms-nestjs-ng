import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ArticleNewComponent } from './article-new/article-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleEditComponent } from './article-edit/article-edit.component';

@NgModule({
  declarations: [HomeComponent, ArticleNewComponent, ArticleEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ArticleEditComponent]
})
export class AdminModule { }
