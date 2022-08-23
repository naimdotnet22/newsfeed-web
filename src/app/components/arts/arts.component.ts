import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {

  data: any = [];
  searchText = '';
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getArtsData();
  }


  getArtsData() {
    this.service.getArtsData().subscribe({
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
