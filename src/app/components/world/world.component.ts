import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  data: any = [];
  searchText = '';
  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getWorldData();
  }


  getWorldData() {
    this.service.getWorldData().subscribe({
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
