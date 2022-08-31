import React, { lazy } from "react";
const HomeSection = lazy(() => import("../components/HomeSection"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Services = lazy(() => import("../components/Services"));
const Work = lazy(() => import("../components/Work"));
const NoteWorthyProjects = lazy(() =>
  import("../components/NoteWorthyProjects")
);
const GithubCalender = lazy(() => import("../components/GithubCalender"));
// const Clients = lazy(() => import("../components/Clients"));
// const Blogs = lazy(() => import("../components/Blogs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMe />
      <Services />
      <Work />
      <NoteWorthyProjects />
      <GithubCalender />
      {/* <Clients /> */}
      <Testimonials />
      {/* <Blogs /> */}
      <Contact />
    </>
  );
}
