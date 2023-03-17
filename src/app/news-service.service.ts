import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { NewsData } from './models';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private URL = "https://newsapi.org/v2/top-headlines";
  private API_KEY = "c3794519280e4eaebf6c8760de4164d9";

  updateData = new Subject<NewsData[]>;

  constructor(private httpClient: HttpClient) {}

  getTopStories(country: string, category: string) : void {

  let params = new HttpParams()
            .append('country', country)
            .append('category', category)
            .append('pageSize', 10);

  let headers = new HttpHeaders()
            .append("X-Api-Key", this.API_KEY)


  this.httpClient.get(this.URL, {headers, params}) 
                          .pipe(
                            map( (data: any) => <NewsData[]> data.articles
                                                          .map( 
                                                            (article: any) => ({
                                                                title: article.title, 
                                                                author: article.author, 
                                                                description: 
                                                                article.description})
                                                                )
                              )
                            ).subscribe(x => this.updateData.next(x));
  }

}
