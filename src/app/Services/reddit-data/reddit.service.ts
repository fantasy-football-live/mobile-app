import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
	providedIn: 'root'
})
export class RedditService {
	constructor(private httpRequestService: HttpRequestService) {}

	private async getLatestLinkPosts() {
		const data = await this.httpRequestService.fetch(
			'https://www.reddit.com/r/fantasypl/new/.json?limit=80'
		);
		return data;
	}

	async getLatestSelfPosts() {
		const data = await this.getLatestLinkPosts();
		const parsed = this.parseData(data);
		return parsed.data.children.filter((post: any) => !post.data.is_self);
	}

	private parseData(data: any) {
		return data.map((post) => {
			return {
				url: post.data.url,
				title: post.data.title,
				image: post.data.thumbnail
			};
		});
	}
}
