import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

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
