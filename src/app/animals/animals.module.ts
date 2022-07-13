import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animal-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsGridComponent } from './animals-grid/animals-grid.component';
import { AnimalCardModule } from '../components/animal-card/animal-card.module';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { CommentsComponent } from './animal-detail/comments/comments.component';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnimalsListComponent, 
    AnimalComponent, 
    AnimalsGridComponent, 
    AnimalDetailComponent, 
    CommentsComponent,
    
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    AnimalCardModule,
    MessageModule,
    ReactiveFormsModule,
  ]
})
export class AnimalsModule { }
