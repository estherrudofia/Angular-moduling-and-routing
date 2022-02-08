import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { PostService } from "src/app/services/post.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
 

  constructor(private post: PostService,  ) { }
 

  posts: any = [];

  


  ngOnInit(): void {
    this.getSection();
    // this.updatePost();
  }



  getSection() {
    this.post.getPost().subscribe(data => {  
      this.posts = data;
      // console.log(this.posts);
      
    })
  }

 


}
