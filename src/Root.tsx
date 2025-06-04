import "swiper/scss";
import "swiper/scss/autoplay";
import "./styles.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { Server } from "react-feather";
import Socials from "./components/Socials";
import { Suspense } from "react";
import { useIsOnline } from "react-use-is-online";
import { Outlet, useLocation } from "react-router";

function Root() {
  const location = useLocation();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <Suspense fallback={<Loading />}>
          <div className="App">
            <Socials />
            <Header />
            <Outlet />
            {location.pathname === "/" && <Footer />}
          </div>
        </Suspense>
      ) : (
        <div className="offline">
          <Server size={40} color="#64ffda" />
          <div className="offline__heading">Oops! You are offline</div>
        </div>
      )}
    </>
  );
}

export default Root;
