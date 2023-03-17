import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NewsData } from '../models';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.css']
})
export class NewsInfoComponent implements OnInit, OnDestroy {

  newsDataSub!: Subscription;
  newsData!: NewsData[];
  
  constructor(private newsService: NewsServiceService){}

  ngOnInit(): void {
    console.log(">>> info")
    this.newsDataSub = this.newsService.updateData.subscribe(
      data => {
        this.newsData = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.newsDataSub.unsubscribe();
  }
}
