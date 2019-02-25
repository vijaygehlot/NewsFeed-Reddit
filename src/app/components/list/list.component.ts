import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() public listOfPosts: Array<any>;

  constructor() { }

  ngOnInit() {
  }

    //  Deafult Thumbnails
  public getImageForPost(post) {

    // tslint:disable-next-line:max-line-length
    return post.preview ? post.preview.images[0].source.url : 'https://a.thumbs.redditmedia.com/K5nlLlAeI_uyIkQnnp_K7PEEZcZsi7qrUCpnPH4pzz0.jpg';

  }

  public getUrl(post) {

    // tslint:disable-next-line:quotemark
    return "https://www.reddit.com" + post.permalink;
  }

}
