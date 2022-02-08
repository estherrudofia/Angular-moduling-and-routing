import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

// import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  toggleForm  = false;

  values = '';

  emailForm = {
    email: '',
    id: 1
  };

  @Input() post:any = {}
  // @Input() emailForm:any = {}

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  createForm(){
    this.toggleForm = !this.toggleForm;
   }
  
   onKey(event: KeyboardEvent,) {
     this.toggleForm = true;
     
     if(event.key === 'Enter') {
      alert(this.values);       
      this.values = (event.target as HTMLInputElement).value ; 
     }

     
  }

  save() {
    console.log(JSON.stringify(this.emailForm));
    
    this.postService.update(this.emailForm).subscribe((data: any) => {
      this.values = data.email;
      console.log(this.values);
    })
  }  

  delete() {
    console.log(this.values);
    
    this.postService.remove().subscribe(data => {
      this.values = JSON.stringify(data); 
      console.log(this.values);
    })
  }


}

