import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { ToastrModule } from "ngx-toastr";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CustomInputComponent } from "./component/custom-input/custom-input.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { FeedComponent } from "./feed/feed.component";
import { PostModalComponent } from "./feed/post-modal/post-modal.component";
import { PostComponent } from "./feed/post/post.component";
import { UserInfoComponent } from "./feed/post/user-info/user-info.component";
import { PostReactionComponent } from "./feed/post/post-reaction/post-reaction.component";
import { HomeModule } from "./home/home.module";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { PostCommentsComponent } from "./feed/post/post-comments/post-comments.component";
import { CommentBoxComponent } from "./feed/post/comment-box/comment-box.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    CustomInputComponent,
    HomeComponent,
    FeedComponent,
    PostModalComponent,
    PostComponent,
    UserInfoComponent,
    PostReactionComponent,
    PostCommentsComponent,
    PostCommentsComponent,
    CommentBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HomeModule,
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule],
})
export class AppModule {}
