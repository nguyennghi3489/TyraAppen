import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutesModule } from './blog.routes'
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutesModule,
    SharedModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
