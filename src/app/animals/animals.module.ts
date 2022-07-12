import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animal-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsGridComponent } from './animals-grid/animals-grid.component';
import { AnimalCardModule } from '../components/animal-card/animal-card.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';


@NgModule({
  declarations: [
    AnimalsListComponent, 
    AnimalComponent, 
    AnimalsGridComponent, 
    AnimalDetailComponent,
    
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    AnimalCardModule
  ]
})
export class AnimalsModule { }
