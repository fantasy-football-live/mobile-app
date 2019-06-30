import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';

describe('ChatServiceService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ChatService = TestBed.get(ChatService);
		expect(service).toBeTruthy();
	});
});
