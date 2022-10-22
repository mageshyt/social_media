import { Component, OnInit } from "@angular/core";
type userType = {
  username: string;
  userTag: string;
  userProfile: string;
};
type postAsset = {
  postImg: string;
  postVideo: string;
};
export type postType = {
  AuthorDetail: userType;
  postText: string;
  postAsset: postAsset;
  commentsCount: number;
  likesCount: number;
  retweetCount: number;
  createdAt: string;
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
  dummyPosts: postType[] = [
    {
      AuthorDetail: this.dummyUser[1],
      postText:
        "Let's set an age limit after which you can't run for political office, perhaps a number just below 70 ...",
      postAsset: {
        postImg: "",
        postVideo: "",
      },
      commentsCount: 32320,
      likesCount: 0,
      retweetCount: 1650,
      createdAt: "Sat Oct 22 2022 19:51:42 GMT+0530 (India Standard Time)",
    },
    {
      AuthorDetail: this.dummyUser[2],
      postText:
        "We filmed a video with some brand new YouTubers, go show them some support 🙌🏻",
      postAsset: {
        postImg:
          "https://pbs.twimg.com/media/FfNqlE1WQAMsZ79?format=jpg&name=large",
        postVideo: "",
      },
      commentsCount: 14500,
      likesCount: 0,
      retweetCount: 2450,
      createdAt: "Sat Oct 22 2022 12:51:42 GMT+0530 (India Standard Time)",
    },
    {
      AuthorDetail: this.dummyUser[0],
      postText:
        "Right now i am working on new project, it is a social media app, i will be releasing it soon, stay tuned",
      postAsset: {
        postImg:
          "https://cdn.sanity.io/images/7azvzymu/production/a26a0f9d3afc7c1b64d2a1fb03520d4c5c822d0a-1919x947.png",
        postVideo: "",
      },
      commentsCount: 14500,
      likesCount: 0,
      retweetCount: 2450,
      createdAt: "Sat Oct 21 2022 15:51:42 GMT+0530 (India Standard Time)",
    },
    {
      AuthorDetail: this.dummyUser[3],
      postText:
        "Our most advanced paint system yet, allowing up to 13 layers for depth, dimension & a hand-painted look",
      postAsset: {
        postImg: "",
        postVideo: "/assets/videos/tesla.mp4",
      },
      commentsCount: 1245,
      likesCount: 91480,
      retweetCount: 765,
      createdAt: "Sat Oct 21 2022 15:51:42 GMT+0530 (India Standard Time)",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
