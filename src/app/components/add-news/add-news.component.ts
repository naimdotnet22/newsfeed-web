import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  formValue: any = {};
  response!: { dbPath: '' };

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.onPageLoad();
  }

  onPageLoad() {
    this.formValue = new FormGroup({
      "author": new FormControl('', Validators.required),
      "title": new FormControl('', Validators.required),
      "publishedAt": new FormControl('', Validators.required),
      "description": new FormControl('', Validators.required),
      "category": new FormControl('', Validators.required),
    })
  }


  uploadFinished = (event: any) => {
    this.response = event;
  }


  onCreate = () => {
    debugger
    if (this.response == undefined) {
      alert("please upload image")
      return;
    }

    let formData: any = new FormData();
    formData.append('author', this.formValue.get('author')?.value);
    formData.append('title', this.formValue.get('title')?.value);
    formData.append('publishedAt', this.formValue.get('publishedAt')?.value);
    formData.append('description', this.formValue.get('description')?.value);
    formData.append('category', this.formValue.get('category')?.value);
    formData.append('urlImage', this.response.dbPath);

    this.service.saveNews(formData).subscribe({
      next: (res) => {
        console.log(res)
        alert('Data Saved Successfully!')
        this.formValue.reset();
      },
      error: (err) => {
        console.log(err)
      },
    })
  }



  get author() { return this.formValue.get('author'); }
  get title() { return this.formValue.get('title'); }
  get publishedAt() { return this.formValue.get('publishedAt'); }
  get description() { return this.formValue.get('description'); }
  get category() { return this.formValue.get('category'); }

}
