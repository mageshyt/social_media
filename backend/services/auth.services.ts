import { supabase } from "../src/app";

export const IsUser_exists = async (email: string) => {
  const res = await supabase
    ?.from("users")
    .select("*")
    .eq("email", email)
    .then(({ data, error }) => {
      console.log("data", data);
      if (error) {
        return false;
      }
      if (data.length > 0) {
        return true;
      }
      return false;
    });
  return res;
};

export const me = async (userId: string) => {
  return supabase?.from("users").select("*").eq("uid", userId);
};
