import { Component, OnInit } from "@angular/core";

type dummyUser = {
  userImg: string;
  userName: string;
  userTag: string;
};

@Component({
  selector: "app-followers-suggestion",
  templateUrl: "./followers-suggestion.component.html",
  styleUrls: ["./followers-suggestion.component.scss"],
})
export class FollowersSuggestionComponent implements OnInit {
  dummyUsers: dummyUser[] = [
    {
      userImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
      userName: "Jeff Bezos",
      userTag: "jeff",
    },
    {
      userImg:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      userName: "mark zuckerberg",
      userTag: "mark",
    },
    {
      userImg: "https://picsum.photos/200",
      userName: "John Doe",
      userTag: "johndoe",
    },
  ];

  ngOnInit(): void {}
}
