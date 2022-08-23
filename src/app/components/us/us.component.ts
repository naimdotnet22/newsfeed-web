import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  data: any = [];
  searchText = '';
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getUsData();
  }

  getUsData() {
    this.service.getUsData().subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

  public createImgPath = (serverPath: string) => { 
    return `http://localhost:5149/${serverPath}`; 
  }


}
