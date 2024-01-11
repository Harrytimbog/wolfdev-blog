// If you are not using src directory, this file should be created inside your root folder
import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

// export default NextAuth(authConfig).auth;
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
