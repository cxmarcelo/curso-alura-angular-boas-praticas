import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListResolver } from './animal-list/animal-list.resolver';
import { AnimalsListComponent } from './animal-list/animals-list.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

const routes: Routes = [
  { path: '', component: AnimalsListComponent, resolve: {animals: AnimalListResolver} },
  { path: 'new', component: NewAnimalComponent,},
  { path: ':id', component: AnimalDetailComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
