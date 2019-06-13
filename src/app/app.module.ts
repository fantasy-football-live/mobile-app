import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HTTP
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Device } from '@ionic-native/device/ngx';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Firebase
import {
	AngularFireModule,
	FirebaseOptionsToken,
} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import config from 'src/firebase.config';

// cookie
import { CookieService } from 'ngx-cookie-service';

@NgModule({
	declarations: [ AppComponent ],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		HttpModule,
		IonicStorageModule.forRoot(),
		AngularFireModule,
		AngularFirestoreModule
	],
	providers: [
		HTTP,
		Device,
		StatusBar,
		SplashScreen,
		Firebase,
		CookieService,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: FirebaseOptionsToken, useValue: config }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
