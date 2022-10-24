import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
export type userType = {
  username: string;
  userTag: string;
  userProfile: string;
};
type postAsset = {
  postImage: string;
  postVideo: string;
};
export type postType = {
  AuthorDetail: any;
  postText: string;
  postAsset: postAsset;
  commentsCount: number;
  likesCount: number;
  retweetCount: number;
  created_at: string;
  postAuthor?: any;
};
@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  dummyUser: userType[] = [
    {
      username: "magesh yt",
      userTag: "@mageshyt",
      userProfile: "https://avatars.githubusercontent.com/u/70838644?v=4",
    },
    {
      username: "Elon musk",
      userTag: "@elonmusk",
      userProfile:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/GMTOIH5ZUJJ3LPYJIWGQW2Y4QY.jpg",
    },
    {
      username: "MrBeast",
      userTag: "@MrBeast",
      userProfile:
        "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg",
    },
    {
      username: "Tesla",
      userTag: "@Tesla",
      userProfile:
        "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png",
    },
  ];
  dummyPosts: postType[] = [];

  constructor(private post: PostService) {}

  ngOnInit(): void {
    this.post.getAllPost().subscribe((res: any) => {
      res.data.forEach((post: any) => {
        if (post.id !== 5) {
          this.dummyPosts.push(post);
        }
      });
    });
  }
}
