import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
	imports: [ IonicModule, CommonModule, FormsModule, ComponentsModule, TabsPageRoutingModule ],
	declarations: [ TabsPage ]
})
export class TabsPageModule {}
