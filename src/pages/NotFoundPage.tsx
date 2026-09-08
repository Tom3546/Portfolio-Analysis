import { Lottie } from "lottie-react";
import { Link } from "react-router-dom";
import NotFoundAnimation from "../assets/404 error animation.json";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-text gap-4">
      <Lottie
        src={NotFoundAnimation}
        loop
        autoplay
        className="h-92 sm:h-72 w-auto max-w-full"
      />
      <div className="flex flex-col text-center gap-2">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <span className="   text-text-muted">
          We couldn't find what you were looking for
          <br />
          Double-check the URL or head back to the dashboard
        </span>
      </div>
      <Link
        to="/"
        className="text-center w-36 p-4 bg-primary text-bg rounded-xl 
        hover:brightness-115 transition-all duration-200"
      >
        Back
      </Link>
    </main>
  );
}
