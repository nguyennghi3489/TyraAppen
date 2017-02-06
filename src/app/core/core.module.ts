import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component'; 
import { BlogService } from './services/blog.service';
import {TranslateModule} from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [HomeComponent],
  exports:[
  	HomeComponent
  ],
  providers:[
  	BlogService
  ]
})
export class CoreModule { }
