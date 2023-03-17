import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormData } from '../models';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit{

  newsForm!: FormGroup;

  COUNTRIES: Map<String, String> = new Map<string, string>([
    ["au", "Australia"],
    ["cn", "China"],
    ["hk", "Hong Kong"],
    ["jp", "Japan"],
    ["sg", "Singapore"],
    ["us", "United States"],
  ]);

  CATEGORIES: String[] = [
    "business",
    "entertainment",
    "general",
    "health",
    "sciences",
    "sports",
    "technology",
  ]

  constructor(private fb: FormBuilder, private newsService: NewsServiceService) {}

  ngOnInit(): void {
    this.newsForm = this.createForm();
  }

  private createForm() : FormGroup<any> {
    return this.fb.group({
      country: this.fb.control<string>("0"),
      category: this.fb.control<string>("0"),
    })
  }
  
  processForm() {
    console.log(this.newsForm.value);
    // this.newsService.getTopStories$(this.newsForm.get("country")?.value, this.newsForm.get("category")?.value).subscribe( x=> console.log(x))
    this.newsService.getTopStories(this.newsForm.get("country")?.value, this.newsForm.get("category")?.value);
    // this.newsService.newsData.subscribe(x => console.log(x));
  }

}
