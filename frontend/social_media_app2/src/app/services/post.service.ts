import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:8000/post";
  getAllPost() {
    return this.http.get(this.baseUrl + "/all");
  }

  getAuthorPost(id: any) {
    return this.http.get("http://localhost:8000/api/user/" + id);
  }

  createPOst(postDoc: any) {
    return this.http.post(this.baseUrl + "/create", postDoc);
  }
}
