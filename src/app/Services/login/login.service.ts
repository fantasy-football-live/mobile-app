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
	login() {
		const p = {
			picks: [
				{
					element: 498,
					position: 1,
					is_captain: true,
					is_vice_captain: false
				},
				{
					element: 268,
					position: 2,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 113,
					position: 3,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 292,
					position: 4,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 339,
					position: 5,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 270,
					position: 6,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 302,
					position: 7,
					is_captain: false,
					is_vice_captain: false
				},
				{ element: 122, position: 8, is_captain: false, is_vice_captain: true },
				{
					element: 305,
					position: 9,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 437,
					position: 10,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 280,
					position: 11,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 190,
					position: 12,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 208,
					position: 13,
					is_captain: false,
					is_vice_captain: false
				},
				{
					element: 425,
					position: 14,
					is_captain: false,
					is_vice_captain: false
				},
				{ element: 93, position: 15, is_captain: false, is_vice_captain: false }
			]
		};
	}
}
