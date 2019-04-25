import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() posts: Post[];


  ngOnInit() {

    this.posts.push(...[
      {
        title: 'Title',
        subtext: 'Buy a cake for yourself because adulting is cool like that.'
      },
      {
        title: 'Title',
        subtext: "Actually it's illegal to be mean to me."
      },
      {
        title: 'Title',
        subtext: "Pitch: 'Tidying up', except every episode ends in divorce."
      },
      {
        title: 'Title',
        subtext: "Honestly, how dare ppl cook without garlic."
      }
    ]);

  }

  deleteItem(i) {
    this.posts.splice(i,1);
  }

}
