import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleNewComponent } from './article-new/article-new.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'article-new', component: ArticleNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
