import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WashListComponent } from './shared/wash-list/wash-list.component';
import { WashesComponent } from './washes/washes.component';

const routes: Routes = [
  { path: '', component: WashesComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'washes', component: WashesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)]
    ,
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
