import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

// Get Data of Reddit News
@Injectable()
export class FeedNewsService {

  constructor(private _http: HttpClient) { }

  getNewestPosts() {
    return this._http.get('https://www.reddit.com/r/all/new.json', {
      params: {'limit': '300'}
    }).map((resp: any) => {
      return resp.data.children.map(child => {
        return child.data;
      });
    });
  }
  // Comments of News

  getMostCommentedPosts() {
    return this._http.get('https://www.reddit.com/hot.json', {
      params: {'limit': '300'}
    }).map((resp: any) => {
      return (resp.data.children as Array<any>)
        .map(child => {
          return child.data
        })
        .sort((childA, childB) => {
          return childA.num_comments - childB.num_comments
        });
    });
  }

}
