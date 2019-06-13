import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class FcmService {
	token: string;
	userFplId: number;

	constructor(private firebase: Firebase, private afs: AngularFirestore, private platform: Platform) {}

	async getToken(id: number = null) {
		if (this.platform.is('android')) {
			this.token = await this.firebase.getToken();
		}

		if (this.platform.is('ios')) {
			this.token = await this.firebase.getToken();
			await this.firebase.grantPermission();
		}

		this.saveToken(id);
	}

	private saveToken(id: number) {
		if (!this.token) return;

		const devicesRef = this.afs.collection('devices');
		const data = {
			token: this.token,
			fplId: id
		};

		return devicesRef.doc(this.token).set(data);
	}

	onNotifications() {
		return this.firebase.onNotificationOpen();
	}
}
