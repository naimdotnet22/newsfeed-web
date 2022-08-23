import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../enums/category';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl: string = 'http://localhost:5149/api/news/'

  constructor(private http: HttpClient) { }

  getHomeData() {
    return this.http.get(this.baseUrl + 'GetTopNews')
  }

  getUsData() {
    return this.http.get(this.baseUrl + 'GetTopNews/' + Category.US)
  }

  getWorldData() {
    return this.http.get(this.baseUrl + 'GetTopNews/' + Category.World)
  }

  getScienceData() {
    return this.http.get(this.baseUrl + 'GetTopNews/' + Category.Science)
  }

  getArtsData() {
    return this.http.get(this.baseUrl + 'GetTopNews/' + Category.Arts)
  }


  saveNews(obj: any) {
    debugger
    return this.http.post(this.baseUrl + 'SaveOrUpdateNews', obj)
  }


}
