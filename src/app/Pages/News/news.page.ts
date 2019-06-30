import { Component, OnInit } from '@angular/core';

import { RedditService } from 'src/app/Services/reddit-data/reddit.service';

@Component({
	selector: 'app-news',
	templateUrl: './news.page.html',
	styleUrls: [ './news.page.scss' ]
})
export class NewsPage implements OnInit {
	latestPosts: any[];
	title = 'NEWS';
	showSpinner = true;

	constructor(private redditService: RedditService) {
		this.latestPosts = [];
	}

	ngOnInit() {
		this.getLatestPosts();
	}

	/**
	 * @description fetches the latest posts from reddit
	 */
	getLatestPosts() {
		this.redditService.getLatestSelfPosts().then((posts) => {
			this.latestPosts = posts;
			this.showSpinner = false;
		});
	}

	refresh(event) {
		this.getLatestPosts();
		event.target.complete();
	}

	/**
	 * @description opens the link selected by the user
	 * @param url url of link to be opened
	 */
	openNewsStory(url: string) {
		window.open(url);
	}
}
