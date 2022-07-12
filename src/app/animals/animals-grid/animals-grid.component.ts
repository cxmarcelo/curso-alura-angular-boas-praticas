import { Component, Input, OnInit } from '@angular/core';
import { Animals } from '../animal';

@Component({
  selector: 'app-animals-grid',
  templateUrl: './animals-grid.component.html',
  styleUrls: ['./animals-grid.component.scss']
})
export class AnimalsGridComponent implements OnInit {

  @Input() animals!: Animals;

  constructor() { }

  ngOnInit(): void {
  }

}
