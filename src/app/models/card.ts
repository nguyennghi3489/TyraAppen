export class Card {
	topic: string;
	createDate: string;
	updatedDate: string;
	imageUrl:string;
	content:string;

	constructor(item:any){
		this.topic = item.doc_topic;
		this.createDate = item.createdAt || "";
		this.updatedDate = item.updatedAt || "";
		this.imageUrl = item.imageUrl || "";
		this.content = item.org_content || "";
	}
}