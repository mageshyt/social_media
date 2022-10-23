import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FollowersSuggestionComponent } from "./followers-suggestion/followers-suggestion.component";
import { TrendingComponent } from "./trending/trending.component";
import { HeaderComponent } from "./header/header.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { SuggesitionUserComponent } from "./suggesition-user/suggesition-user.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { AuthService } from "../services/auth.service";

@NgModule({
  declarations: [
    FollowersSuggestionComponent,
    TrendingComponent,
    HeaderComponent,
    UserCardComponent,
    SuggesitionUserComponent,
    SearchbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    FollowersSuggestionComponent,
    TrendingComponent,
    HeaderComponent,
    UserCardComponent,
    SuggesitionUserComponent,
    SearchbarComponent,
  ],
  providers: [AuthService],
})
export class HomeModule {}
