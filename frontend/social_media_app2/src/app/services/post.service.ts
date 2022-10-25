import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { postType } from "../feed/feed.component";

export type postLike = {
  user_id: string;
  post_id: string;
};
@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:8000/post";
  posts: postType[] = [];
  async getAllPost() {
    return this.http.get(this.baseUrl + "/all").subscribe((data: any) => {
      this.posts = data.data;
    });
  }

  getAuthorPost(id: any) {
    return this.http.get("http://localhost:8000/api/user/" + id);
  }

  createPOst(postDoc: any) {
    return this.http.post(this.baseUrl + "/create", postDoc, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }

  likePost(data: postLike) {
    return this.http.post(this.baseUrl + "/like", data, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
  comment(data: any) {
    return this.http.post(this.baseUrl + "/comment", data, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  }
}
