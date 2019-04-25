import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../models/Post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
  title: string;
  subtext: string;
  item: any = {};

  @Output() emitToParent: EventEmitter<Post>;
    constructor() {
      this.emitToParent = new EventEmitter<Post>();
    }


    ngOnInit() {
    }

    addItem(){ 
      this.item = {};
      this.item.subtext = this.subtext;
      this.item.title = this.title;
      this.emitToParent.emit(this.item);
    }
    
    show = true;

    toggle() {
      this.show = !this.show;
    }
}
