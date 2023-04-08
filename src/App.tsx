import { Suspense, lazy, useState, useEffect } from "react";
import Loading from "./components/Loading";
import { Outlet, useLocation } from "react-router-dom";
import { Server } from "react-feather";
import Footer from "./components/Footer";

const Socials = lazy(() => import("./components/Socials"));
const Header = lazy(() => import("./components/Header"));

export function App() {
  const [isOffline, setIsOffline] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("offline", () => setIsOffline(true));
    window.addEventListener("online", () => setIsOffline(false));
    return () => {
      window.removeEventListener("offline", () => setIsOffline(true));
      window.removeEventListener("online", () => setIsOffline(false));
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Socials />
        <Header />
        <Outlet />
        {location.pathname === "/" && <Footer />}
      </div>
      {isOffline && (
        <div className="offline">
          <Server size={40} color="#64ffda" />
          <div className="offline__heading">Oops! You are offline</div>
        </div>
      )}
    </Suspense>
  );
}