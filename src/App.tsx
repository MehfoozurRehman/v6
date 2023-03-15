import { Suspense, useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Outlet } from "react-router-dom";
import { Server } from "react-feather";
import Socials from "./components/Socials";

export function App(): JSX.Element {
  const [showFooter, setShowFooter] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/") {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("offline", () => setIsOffline(true));
    window.addEventListener("online", () => setIsOffline(false));
  }, []);

  return isOffline ? (
    <div className="offline">
      <Server size={40} color="#64ffda" />
      <div className="offline__heading">Oops! You are offline</div>
    </div>
  ) : (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Socials />
        <Header />
        <Outlet />
      </div>
      {showFooter ? <Footer /> : null}
    </Suspense>
  );
}
