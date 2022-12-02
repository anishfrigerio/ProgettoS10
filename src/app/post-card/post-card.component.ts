import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService} from './../post.service'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
[x: string]: any;


  @Input() p!:Post

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {

  }
  eliminaPost(id:number) {
    this.postSrv.eliminaPost(id)
  }


}
