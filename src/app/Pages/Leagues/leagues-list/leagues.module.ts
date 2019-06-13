import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaguesPage } from './leagues.page';
import { ComponentsModule } from '../../../Components/components.module';
import { LeagueComponent } from '../leagues-detail/league.component';
import { TeamPageComponent } from 'src/app/Components/team-page/team-page.component';
import { CustomLeaguesComponent } from '../custom-leagues/custom-leagues.component';

const routes: Routes = [
	{
		path: '',
		component: LeaguesPage
	}
];

@NgModule({
	entryComponents: [ LeagueComponent, TeamPageComponent, CustomLeaguesComponent ],
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ComponentsModule,
		RouterModule.forChild(routes)
	],
	declarations: [ LeaguesPage, LeagueComponent, CustomLeaguesComponent ]
})
export class LeaguesPageModule {}
