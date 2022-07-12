import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalsListComponent } from './animal-list/animals-list.component';

const routes: Routes = [
  { path: '', component: AnimalsListComponent,},
  { path: ':id', component: AnimalDetailComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
