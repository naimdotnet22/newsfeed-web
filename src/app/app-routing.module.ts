import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { ArtsComponent } from './components/arts/arts.component';
import { HomeComponent } from './components/home/home.component';
import { ScienceComponent } from './components/science/science.component';
import { UsComponent } from './components/us/us.component';
import { WorldComponent } from './components/world/world.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'us', component: UsComponent},
  { path: 'world', component: WorldComponent},
  { path: 'science', component: ScienceComponent},
  { path: 'arts', component: ArtsComponent},
  { path: 'add-news', component: AddNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
