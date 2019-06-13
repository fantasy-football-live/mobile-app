import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { PitchComponent } from './team-page/pitch/pitch.component';
import { RowOfPlayersComponent } from './team-page/pitch/row-of-players/row-of-players.component';
import { ListDividerComponent } from './ui/list-divider/list-divider.component';
import { PitchTeamInfoComponent } from './team-page/pitch/pitch-team-info/pitch-team-info.component';
import { PlayerPhotoComponent } from './team-page/pitch/player-photo/player-photo.component';
import { TeamPageComponent } from './team-page/team-page.component';

@NgModule({
	imports: [ IonicModule, CommonModule ],
	declarations: [
		HeaderComponent,
		LoadingSpinnerComponent,
		PitchComponent,
		RowOfPlayersComponent,
		ListDividerComponent,
		PitchTeamInfoComponent,
		PlayerPhotoComponent,
		TeamPageComponent
	],
	exports: [
		HeaderComponent,
		LoadingSpinnerComponent,
		RowOfPlayersComponent,
		ListDividerComponent,
		PitchComponent,
		PlayerPhotoComponent,
		TeamPageComponent
	]
})
export class ComponentsModule {}
