import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})


export class PostDetailsComponent implements OnInit {
  x!: Post
  constructor(private postSrv:PostService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.postSrv.getDetails(id).then((value)=>{
      this.x = value
      console.log(this.x)
    })

  }


}
