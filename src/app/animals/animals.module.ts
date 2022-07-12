import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animal-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsGridComponent } from './animals-grid/animals-grid.component';
import { AnimalCardModule } from '../components/animal-card/animal-card.module';


@NgModule({
  declarations: [AnimalsListComponent, AnimalComponent, AnimalsGridComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    AnimalCardModule
  ]
})
export class AnimalsModule { }
