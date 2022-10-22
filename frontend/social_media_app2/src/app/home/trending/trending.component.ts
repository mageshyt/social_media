import { Component, OnInit } from "@angular/core";

type hasTag = {
  hashTag: string;
  tweetCount: number;
};

type TrendingType = {
  title: string;
  hashtags: hasTag[];
};
@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"],
})
export class TrendingComponent implements OnInit {
  numberFormatter = (num: any) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };
  dummyTrending: TrendingType[] = [
    {
      title: "Trending in India",
      hashtags: [
        {
          hashTag: "#India",
          tweetCount: this.numberFormatter(64543),
        },
      ],
    },
    {
      title: "NFT • TRENDING",
      hashtags: [
        {
          hashTag: "#NFT",
          tweetCount: this.numberFormatter(436654),
        },
      ],
    },
    {
      title: "FIFA World Cup",
      hashtags: [
        {
          hashTag: "#FIFA",
          tweetCount: this.numberFormatter(246700),
        },
        {
          hashTag: "#WorldCup",
          tweetCount: this.numberFormatter(45212),
        },
        {
          hashTag: "#MUFC",
          tweetCount: this.numberFormatter(97390),
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
