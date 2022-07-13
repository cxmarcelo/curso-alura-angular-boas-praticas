import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comments } from './comments';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() id!: number;

  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.findComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    })
  }

  public save() {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService.insertComment(this.id, comment)
      .pipe(
        switchMap(() => this.commentsService.findComment(this.id)),
        tap(() => {
          this.commentForm.reset();
          alert("Salvo");
        })
      );
  }

}
