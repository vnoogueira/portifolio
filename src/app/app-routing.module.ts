import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
  },
  {
    path: 'card',
    component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
