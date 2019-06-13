import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
	providedIn: 'root'
})
export class RedditService {
	constructor(private httpRequestService: HttpRequestService) {}

	async getLatestLinkPosts() {
		const data = await this.httpRequestService.fetch(
			'https://www.reddit.com/r/fantasypl/new/.json?limit=80'
		);
		return data.data.children.filter((post) => !post.data.is_self).map((post) => {
			return {
				url: post.data.url,
				title: post.data.title,
				image: post.data.thumbnail
			};
		});
	}
}
