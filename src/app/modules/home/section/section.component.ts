import { Component, OnInit } from '@angular/core';
import { PostService } from "src/app/services/post.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(private teapot: PostService) { }


  teapots: any = [];

  ngOnInit(): void {
    this.getSection();
  }

  getSection() {
    this.teapot.get().subscribe(data => {
      this.teapots = data;
      console.log(this.teapots);
      
    })
  }

}
