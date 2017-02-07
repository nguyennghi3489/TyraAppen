import { DatePipe } from '@angular/common';

export class Card {
	topic: string;
	createDate: string;
	updatedDate: string;
	imageUrl:string;
	content:string;
	school:string;

	datePipeEn: DatePipe = new DatePipe('en-US')

	constructor(item:any){
		this.topic = item.blogg_topic || "Default Topic";
		this.createDate = item.createdAt || "";
		this.updatedDate = item.updatedAt || "";
		this.imageUrl = item.imageUrl || "";
		this.content = item.org_content || "Default Content";
		this.school = item.school || "";
	}
	getDate(){
		if(this.updatedDate){
			return "Updated at " + this.datePipeEn.transform(this.updatedDate, 'yyyy-MM-dd')
		}
		return "Created at " + this.datePipeEn.transform(this.createDate, 'yyyy-MM-dd')	
	}
}