import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamPage } from './team.page';
import { ComponentsModule } from '../../Components/components.module';

const routes: Routes = [
	{
		path: '',
		component: TeamPage
	}
];

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes) ],
	declarations: [ TeamPage ]
})
export class TeamPageModule {}
