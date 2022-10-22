import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CustomInputComponent } from "./component/custom-input/custom-input.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";
import { HeaderComponent } from "./home/header/header.component";
import { SearchbarComponent } from "./home/searchbar/searchbar.component";
import { UserCardComponent } from "./home/user-card/user-card.component";
import { FollowersSuggestionComponent } from "./home/followers-suggestion/followers-suggestion.component";
import { SuggesitionUserComponent } from "./home/suggesition-user/suggesition-user.component";
import { FeedComponent } from "./feed/feed.component";
import { PostModalComponent } from "./feed/post-modal/post-modal.component";
import { PostComponent } from './feed/post/post.component';
import { UserInfoComponent } from './feed/post/user-info/user-info.component';
import { PostReactionComponent } from './feed/post/post-reaction/post-reaction.component';
import { TrendingComponent } from "./home/trending/trending.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    CustomInputComponent,
    HomeComponent,
    HeaderComponent,
    SearchbarComponent,
    UserCardComponent,
    FollowersSuggestionComponent,
    SuggesitionUserComponent,
    FeedComponent,
    PostModalComponent,
    PostComponent,
    UserInfoComponent,
    PostReactionComponent,
    TrendingComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule],
})
export class AppModule {}
