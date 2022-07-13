import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animal-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsGridComponent } from './animals-grid/animals-grid.component';
import { AnimalCardModule } from '../components/animal-card/animal-card.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { NewAnimalComponent } from './new-animal/new-animal.component';


@NgModule({
  declarations: [
    AnimalsListComponent, 
    AnimalComponent, 
    AnimalsGridComponent, 
    AnimalDetailComponent, 
    CommentsComponent, NewAnimalComponent,
    
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    AnimalCardModule,
    SharedModule
  ]
})
export class AnimalsModule { }
