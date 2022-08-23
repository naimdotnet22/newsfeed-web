import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = [];
  searchText = '';
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getHomePageData();
  }

  getHomePageData() {
    this.service.getHomeData().subscribe({
      next: (res)=>{
        this.data = res;
        //console.log(this.data)
        localStorage.setItem('sessionData', JSON.stringify(this.data))
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }


  public createImgPath = (serverPath: string) => { 
    return `http://localhost:5149/${serverPath}`; 
  }


}
