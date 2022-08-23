import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  data: any = [];
  searchText = '';
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getScienceData();
  }


  getScienceData() {
    this.service.getScienceData().subscribe({
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
