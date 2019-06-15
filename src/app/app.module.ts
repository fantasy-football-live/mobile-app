import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HTTP
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Device } from '@ionic-native/device/ngx';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Firebase
import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import config from 'src/firebase.config';

// socket io
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const socketConfig: SocketIoConfig = {
	// url: 'localhost:3000',
	url: 'https://fantasy-chat-app.herokuapp.com/',
	options: {}
};

@NgModule({
	declarations: [ AppComponent ],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		SocketIoModule.forRoot(socketConfig),
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
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		{ provide: FirebaseOptionsToken, useValue: config }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
