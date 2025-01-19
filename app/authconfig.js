export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  Callbacks: {
    authorized({ auth, request }) {
      console.log("Auth:", auth);
      console.log("Request URL:", request.nextUrl.pathname);

      const isLoggedIn = auth?.User;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        console.log("Accessing dashboard, logged in:", isLoggedIn);
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        console.log("Logged in, redirecting to dashboard");
        return Response.redirect(new URL("/dashboard"), request.nextUrl);
      }
      console.log("Allowing access to other routes");
      return true;
    },
  },
};
