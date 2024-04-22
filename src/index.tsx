import "swiper/scss";
import "swiper/scss/autoplay";
import "./styles.scss";

import { Route, useLocation } from "wouter";

import Archive from "./screens/Archive";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import Loading from "./components/Loading";
import { Server } from "react-feather";
import Socials from "./components/Socials";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { useIsOnline } from "react-use-is-online";

export function App() {
  const [location] = useLocation();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <Suspense fallback={<Loading />}>
          <div className="App">
            <Socials />
            <Header />
            <Route path="/" component={Home} />
            <Route path="/archive" component={Archive} />
            {location === "/" && <Footer />}
          </div>
        </Suspense>
      ) : (
        <div className="offline">
          <Server size={40} color="var(--primary)" />
          <div className="offline__heading">Oops! You are offline</div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
