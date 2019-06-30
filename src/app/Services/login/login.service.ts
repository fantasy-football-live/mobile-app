import { Injectable, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
	providedIn: 'root'
})
export class LoginService implements OnInit {
	constructor(private nativeHttp: HTTP) {}

	ngOnInit() {}

	// experimental
	login() {}
}
