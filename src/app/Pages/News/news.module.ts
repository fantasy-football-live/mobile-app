import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { ComponentsModule } from '../../Components/components.module';

const routes: Routes = [
	{
		path: '',
		component: NewsPage
	}
];

@NgModule({
	imports: [ CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes) ],
	declarations: [ NewsPage ]
})
export class NewsPageModule {}
