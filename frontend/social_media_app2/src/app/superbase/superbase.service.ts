import { Injectable } from "@angular/core";
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from "@supabase/supabase-js";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class SuperbaseService {
  private supabase?: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
    console.log("admin", this.supabase.auth.admin);
  }

  public async uploadImage(file: any) {
    console.log("file", file);
    await this.supabase?.storage
      .from("images")
      .upload(`image-${file.name}`, file)
      .then((res) => {
        console.log("res", res);
      });
  }
}
