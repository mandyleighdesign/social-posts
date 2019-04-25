import { Component } from '@angular/core';
import { Post } from './models/Post';

@Component({
  selector: 'social-posts',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social post';
  
  loadComponent = false;
  List: Array<Post> = [];

  loadMyChildComponent(){
     this.loadComponent = !this.loadComponent;
  }
  addnewItem(data: Post){
    this.List.unshift(data);
    this.loadComponent = !this.loadComponent;
  }

}
