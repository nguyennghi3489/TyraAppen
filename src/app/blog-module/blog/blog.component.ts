import { Component } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  cardList:Array<Card> = []

  constructor(private blogService:BlogService) { 
  	blogService.getDemoBlog().take(10).subscribe((data)=>{
  		var card = new Card(data);
      this.cardList.push(card);
  	})
  }
}
