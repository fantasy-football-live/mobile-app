import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LoginGuard } from '../Guards/login.guard';

const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'news',
				loadChildren: '../Pages/News/news.module#NewsPageModule',
				canActivate: [ LoginGuard ]
			},
			{ path: 'home', loadChildren: '../Pages/Home/home.module#HomePageModule' },
			{
				path: 'team',
				loadChildren: '../Pages/Team/team.module#TeamPageModule',
				canActivate: [ LoginGuard ]
			},
			{
				path: 'settings',
				loadChildren: '../Pages/Settings/settings.module#SettingsPageModule',
				canActivate: [ LoginGuard ]
			},
			{
				path: 'leagues',
				loadChildren: '../Pages/Leagues/leagues-list/leagues.module#LeaguesPageModule',
				canActivate: [ LoginGuard ]
			},
			{
				path: 'stats',
				loadChildren: '../Pages/Stats/stats.module#StatsPageModule',
				canActivate: [ LoginGuard ]
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class TabsPageRoutingModule {}
