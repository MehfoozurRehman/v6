import { Suspense, useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Outlet } from "react-router-dom";
import Socials from "./components/Socials";

export default function App() {
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/") {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, []);

  return (
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
