import { Injectable } from '@angular/core';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	base_url = 'https://fantasy-chat-app.herokuapp.com/';
	// base_url = 'http://localhost:3000/';
	constructor(private httpRequest: HttpRequestService) {}

	getMessages() {
		return this.httpRequest.fetch(this.base_url + 'messages');
	}
}
