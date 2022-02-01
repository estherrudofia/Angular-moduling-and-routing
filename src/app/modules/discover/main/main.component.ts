import { Component, OnInit } from '@angular/core';
import { PostService } from "src/app/services/post.service";
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // newForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) { }
  
  post: any = []
  
  submitForm = this.formBuilder.group({
    inputEmail: '',
    textArea1: ''
  })

  ngOnInit(): void {
  }

  sendPost() {
    this.postService.create(JSON.stringify(this.submitForm.value)).subscribe(data => {
      this.post = data;
      console.log(this.post);
      
    })
  }

  onSubmit(): void {
    this.sendPost();
      console.warn('Your order has been submitted', this.submitForm.value);
      this.submitForm.reset();
    }

}


