import { withAuth } from "@auth/core/middleware";

export const config = {
  matcher: ["/dashboard/:path*"], // Define protected routes
};

export default withAuth({
  pages: {
    signIn: "/login", // Redirect unauthenticated users to this page
  },
});
