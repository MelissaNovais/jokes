
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [CommonModule],
	declarations: [
		HomeComponent
	],
	exports: [
		HomeComponent,
	],
	providers: [CommonModule],
	bootstrap: [],
})
export class PagesModule { }
