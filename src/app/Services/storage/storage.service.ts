import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	constructor(private storage: Storage) {}

	async clear() {
		const user = await this.storage.get('user');
		this.storage.clear();
		this.storage.set('user', user);
	}
}
