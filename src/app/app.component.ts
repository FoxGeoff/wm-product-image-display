import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wm-product-image-display';
  storedPosts: Post[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoAuthUser();
  }

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
  }

}
}
