import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as Aos from 'aos';
import { FcmService } from './Services/Firebase/fcm.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private fcm: FcmService,
		public toastController: ToastController,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	private async presentToast(message) {
		const toast = await this.toastController.create({
			message,
			duration: 3000
		});
		toast.present();
	}

	private notificationSetup() {
		this.fcm.getToken();
		this.fcm.onNotifications().subscribe((msg) => {
			if (this.platform.is('ios')) {
				this.presentToast(msg.aps.alert);
			} else {
				this.presentToast(msg.body);
			}
		});
	}

	initializeApp() {
		this.platform.ready().then(() => {
			Aos.init();
			this.statusBar.styleDefault();
			this.statusBar.overlaysWebView(false);
			this.statusBar.show();
			this.splashScreen.hide();
			this.notificationSetup();
		});
	}
}
